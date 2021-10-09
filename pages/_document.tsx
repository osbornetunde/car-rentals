import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <style
          dangerouslySetInnerHTML={{
            __html: `
                       @font-face {
                            font-family: Brands;
                            src: url("/fonts/fa-brands-400.ttf");
                            font-style: normal;
                            font-display: optional;
                         }
                    @font-face {
                        font-family: Regular;
                        src: url("/fonts/fa-regular-400.ttf");
                        font-style: normal;
                        font-display: optional;
                     }
                     @font-face {
                        font-family: Solid;
                        src: url("/fonts/fa-solid-900.ttf");
                        font-style: normal;
                        font-display: optional;
                     }
                `,
          }}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

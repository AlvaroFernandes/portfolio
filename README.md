This is a static-exported [Next.js](https://nextjs.org) portfolio.

## Local development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Static hosting

This project is configured with `output: "export"` in `next.config.mjs`, so the production build generates static files in `out/`.

Build the static site with:

```bash
npm run build
```

Upload the contents of `out/` to your static hosting provider.

## Contact form endpoint

The contact form now sends directly from the browser to an external form endpoint. Set this public environment variable before building:

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

Examples of compatible providers:

- Formspree
- Web3Forms
- FormSubmit

The endpoint must accept a `POST` request with `FormData` fields named `senderEmail` and `message`.

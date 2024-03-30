# quick-taiwan-conversions

This is a vue3 static SPA for showing some common conversions needed for immigrants to Taiwan, particularly Americans.

The frontend is managed through Vite. Vite provides a dev server. It also provides static builds using Rollup.

## Local Development

1. Install packages:

```bash
npm install
```

2. Run dev server on port 3000

```bash
npm run dev
```

3. You can also test the static build by first creating a build, and then serving it:

```bash
npm run build
npm run serve
```

4. Run the linter to automatically fix linting issues

```bash
npm run lint
```

## Project Management

508.dev strives to keep project management up to date to make it as easy as possible
to contribute to our FOSS projects. Usually, our project-management system is built into
wherever you're viewing this repository. In this case, that's codeberg.

You can see open tickets on our KANBAN board at: https://codeberg.org/508_dev/quick-taiwan-conversions/projects/8668 .
Tickets are categorized as beginner, intermediate, or advanced. Feel free to
assign a ticket to yourself, or leave a comment asking any questions! Also feel
free to create any new issues for any features you'd like to recommend.

For more information, or to see the other FOSS projects we work on, go to
https://508.dev


## Deploy

The currently auto-builds and deploys to our coolify service on merge to `main` branch.

To manually deploy, create a static build with `npm run build`, then, take the output
of the `dist` directory and host it on a static webserver somewhere.

The current URL is https://converter.508.dev

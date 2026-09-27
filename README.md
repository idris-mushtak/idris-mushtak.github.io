# idris-mushtak.github.io

Personal resume site with two resumes, **Engineering** and **Marketing**, switched from the top bar (`#engineering` / `#marketing` links work directly).

Built on others' work rather than from scratch:
- [React Bits](https://github.com/DavidHDev/react-bits): Galaxy and Aurora WebGL backgrounds, DecryptedText, GradientText, RotatingText, BlurText, ShinyText, CountUp, SpotlightCard, ScrollVelocity, Magnet, ClickSpark (vendored in `src/rb/`)
- [Motion](https://github.com/motiondivision/motion) for page and scroll transitions
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling
- Vite + React + Tailwind CSS

Content lives in `src/data.ts`. `npm run dev` to work locally; pushing to `main` deploys to GitHub Pages.

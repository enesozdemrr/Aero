# AeroBrief — deploy-ready Next.js starter

## Local development
1. Install Node.js 20.9+.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload this project.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected Next.js defaults and deploy.
5. A `*.vercel.app` URL will be generated.

No environment variables are required for the current demo content.
The `.env.example` file is for the optional Supabase integration planned for the next iteration.

## Content and sources
- Starter lessons are in `lib/content.ts`.
- Add or edit lesson objects in the `lessons` array.
- Each lesson should include a primary source URL and be checked against the source before publishing.
- Accident summaries should distinguish official findings from preliminary reports.
- AMM/SRM examples in the English exercises are original educational examples, not copied excerpts from controlled manuals.

## Important
This starter is a working content prototype, not yet a complete multi-user platform.
Authentication, admin publishing, scheduled content refresh, user progress sync, and database-backed quizzes are planned for the next iteration.
Never use educational content as an aircraft maintenance instruction. Approved aircraft-specific maintenance data always takes precedence.

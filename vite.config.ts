import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

const repoName = 'my-quiz-app';
// https://vitejs.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react(), tsconfigPaths()],
});

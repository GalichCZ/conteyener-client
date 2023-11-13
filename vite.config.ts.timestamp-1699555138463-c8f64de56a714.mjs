// vite.config.ts
import { defineConfig } from "file:///home/galich/IdeaProjects/conteyner-front/node_modules/vite/dist/node/index.js";
import react from "file:///home/galich/IdeaProjects/conteyner-front/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "/home/galich/IdeaProjects/conteyner-front";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  },
  server: {
    hmr: {
      host: "localhost"
    },
    watch: {
      usePolling: true
    },
    host: true,
    // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173
    // you can replace this port with any port
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9nYWxpY2gvSWRlYVByb2plY3RzL2NvbnRleW5lci1mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZ2FsaWNoL0lkZWFQcm9qZWN0cy9jb250ZXluZXItZnJvbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZ2FsaWNoL0lkZWFQcm9qZWN0cy9jb250ZXluZXItZnJvbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW3sgZmluZDogXCJAXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSB9XSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG1yOiB7XG4gICAgICBob3N0OiBcImxvY2FsaG9zdFwiLFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgfSxcbiAgICBob3N0OiB0cnVlLCAvLyBuZWVkZWQgZm9yIHRoZSBEb2NrZXIgQ29udGFpbmVyIHBvcnQgbWFwcGluZyB0byB3b3JrXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBwb3J0OiA1MTczLCAvLyB5b3UgY2FuIHJlcGxhY2UgdGhpcyBwb3J0IHdpdGggYW55IHBvcnRcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlMsU0FBUyxvQkFBb0I7QUFDMVUsT0FBTyxXQUFXO0FBQ2xCLFlBQVksVUFBVTtBQUZ0QixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWtCLGFBQVEsa0NBQVcsS0FBSyxFQUFFLENBQUM7QUFBQSxFQUNwRTtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxNQUFNO0FBQUE7QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

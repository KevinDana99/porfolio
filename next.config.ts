/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Excluir SVGs de la regla default que los maneja como archivos estáticos
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test instanceof RegExp && rule.test.test(".svg")) {
        rule.exclude = /\.svg$/;
      }
    });

    // Agregar loader SVGR para convertir SVGs en componentes React
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts|jsx|tsx)$/],
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;

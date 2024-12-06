
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
    const config = getDefaultConfig(__dirname);
    const { transformer, resolver } = config;

    // Configuração para o transformer do React Native SVG
    config.transformer = {
        ...transformer,
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
    };

    // Modificando a resolução de extensões para incluir o SVG
    config.resolver = {
        ...resolver,
        assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...resolver.sourceExts, "svg"],
    };

    // Adicionando a resolução para o 'normalize-css-color'
    config.resolver.extraNodeModules = {
        ...resolver.extraNodeModules,
        'normalize-css-color': require.resolve('normalize-css-color'),
    };

    return config;
})();

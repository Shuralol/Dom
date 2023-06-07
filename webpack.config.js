const path = require('path');

module.exports = {
  entry: './src/index.js', // точка входа вашего приложения
  output: {
    filename: 'bundle.js', // имя выходного файла
    path: path.resolve(__dirname, 'dist'), // путь к папке, где будет сгенерирована сборка
  },
  module: {
    rules: [
      // правила загрузки файлов
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      // правила загрузки стилей
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // путь к папке сборки для dev server
    port: 8080, // порт для dev server
  },
};

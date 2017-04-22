requirejs.config({
    baseUrl: '',

    paths:{
        'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react',
        'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-dom',
        'babel': 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser',
        'jquery': 'http://code.jquery.com/jquery-latest',
        'jsx': 'jsx',
        'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
    },

    shim : {
        "react": {
          //deps: [''],
          exports: "React"
        },
        "react-dom": {
          exports: "React-Dom"
        },
      },

    config: {
        babel: {
          sourceMaps: "inline",
          fileExtension: ".jsx"
        }
      }
});

require(['jsx!index'], function(){});

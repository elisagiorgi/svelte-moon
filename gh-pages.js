var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://elisagiorgi.github.io/svelte-moon/', // Update to point to your repository  
        user: {
            name: 'elisagiorgi', // update to use your name
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
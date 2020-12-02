export default async ({
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router, // the router instance for the app
                    siteData, // site metadata
                    isServer // is this enhancement applied in server-rendering or client
                }) => {
    // ...apply enhancements to the app
    console.log('hello');
    const path = require('path');
    const fs = require('fs/promises');
    const matter = require('gray-matter')

}
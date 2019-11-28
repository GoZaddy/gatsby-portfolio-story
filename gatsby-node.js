exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        query{
            allMarkdownRemark{
                nodes{
                    frontmatter{
                        title
                    }
                }
            }
        }
    `);

    if(result.errors){
        reporter.panic("Failed to create Pages", result.errors);
    }

    const pages = result.data.allMarkdownRemark.nodes;
    pages.forEach(page => {
        actions.createPage({
            path: page.frontmatter.title,
            component: require.resolve("./src/templates/page.jsx"),
            context: {
               title:  page.frontmatter.title
            }
        });

    });
}
// .eleventy.js
module.exports = function(eleventyConfig) {

  // --- Passthrough Copy ---
  // Copy static assets like CSS, JavaScript, and image folders to the output directory (_site)
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");

  // --- Create Ordered Collection for Math 9 Operations ---
  eleventyConfig.addCollection("math9OperationsOrdered", function(collectionApi) {
    console.log("[Debug Collection] Running math9OperationsOrdered..."); // Log start

    // 1. Filter pages with the unit tag AND an 'order' key
    const taggedPages = collectionApi.getFilteredByTag("math9-operations"); // Get all first
    console.log(`[Debug Collection] Found ${taggedPages.length} pages with tag "math9-operations"`); // Log count

    const unitPages = taggedPages.filter(item => {
         const hasOrder = typeof item.data.order !== 'undefined';
         // if (!hasOrder) {
         //    console.log(`[Debug Collection] Filtering out: ${item.url} (missing order)`);
         // }
         return hasOrder;
    });
    console.log(`[Debug Collection] Found ${unitPages.length} pages with tag AND order key.`); // Log filtered count

    // 2. Sort pages by the 'order' front matter key
    unitPages.sort((a, b) => {
        return (a.data.order || 0) - (b.data.order || 0);
    });
    console.log("[Debug Collection] Sorted pages by order:"); // Log sorted list
    unitPages.forEach(p => console.log(`  - Order ${p.data.order}: ${p.url}`));

    // 3. Add 'previousInSection' and 'nextInSection' data to each page
    console.log("[Debug Collection] Assigning previous/next links...");
    for (let i = 0; i < unitPages.length; i++) {
        const previous = unitPages[i - 1]; // Will be undefined for i=0
        const next = unitPages[i + 1];     // Will be undefined for last item
        unitPages[i].data.previousInSection = previous;
        unitPages[i].data.nextInSection = next;
         // Log assignment for the current page being processed by the loop
         // console.log(`  - Assigning to ${unitPages[i].url}: Prev=${previous ? previous.url : 'None'}, Next=${next ? next.url : 'None'}`);
    }

    // 4. Return the processed and sorted pages
    return unitPages;
});

  // --- Add other configurations (like more collections) ABOVE the return statement ---


  // --- Configuration Object RETURNED at the END ---
  // This defines directories, template engines, etc.
  return {
    dir: {
      input: ".",             // Root folder for inputs
      includes: "_includes",  // Folder for layouts
      data: "_data",          // Folder for global data
      output: "_site"         // Output folder
    },
    // Template Engines
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}; // End of module.exports function
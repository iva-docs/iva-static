<template>
  <div class="container content box" style="margin-top:100px">
    <RichTextRenderer :document="content" />
  </div>
</template>

<script>
import Contentful from "../../plugins/contentful.js";
import RichTextRenderer from "contentful-rich-text-vue-renderer";

export default {
  data() {
    return {
      title: "",
      content: {
        nodeType: "document",
        content: [
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value: "Hello",
                marks: [{ type: "bold" }]
              },
              {
                nodeType: "text",
                value: " world!",
                marks: [{ type: "italic" }]
              }
            ]
          }
        ]
      }
    };
  },
  async asyncData({ params }) {
    const client = Contentful.createClient();
    const resBlog = await client.getEntry(params.id);
    document.title = "Iva - " + resBlog.fields.title;
    return { content: resBlog.fields.content };
  },
  methods: {
    renderContent(node) {
      if (node.value) {
        let str = node.value;
        return str + " " + this.renderContent(node.content);
      }
      return "";
    }
  },
  components: {
    RichTextRenderer
  }
};
</script>

<template>
  <div class="container content box is-dark" style="margin-top:100px">
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
  mounted() {
    (function(m, a, i, l, e, r) {
      m["MailerLiteObject"] = e;
      function f() {
        var c = { a: arguments, q: [] };
        var r = this.push(c);
        return "number" != typeof r ? r : f.bind(c.q);
      }
      f.q = f.q || [];
      m[e] = m[e] || f.bind(f.q);
      m[e].q = m[e].q || f.q;
      r = a.createElement(i);
      var _ = a.getElementsByTagName(i)[0];
      r.async = 1;
      r.src = l + "?v" + ~~(new Date().getTime() / 1000000);
      _.parentNode.insertBefore(r, _);
    })(
      window,
      document,
      "script",
      "https://static.mailerlite.com/js/universal.js",
      "ml"
    );

    var ml_account = ml("accounts", "2003320", "k7r4d1e0o8", "load");
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

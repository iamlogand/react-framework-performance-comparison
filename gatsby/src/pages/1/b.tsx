import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 1B</h2>
      <Link to="/1">Go Back</Link>

      <h3>Essay</h3>
      <p>Writing an essay can be both exciting and daunting. It's a chance to express your ideas and showcase your writing skills, but it can also be stressful trying to organize your thoughts and make sure everything flows smoothly.</p>
      <p>One important aspect of writing a successful essay is having a clear and concise thesis statement. This statement should clearly state your main argument and provide a roadmap for the rest of your essay.</p>
      <p>Once you have your thesis statement, it's important to organize your essay into a logical structure. This can be done using paragraphs, headings, and subheadings to break up your ideas into manageable sections.</p>
      <p>It's also important to back up your arguments with evidence and examples. This can include quotes from experts, statistics, or personal anecdotes.</p>
      <p>When writing your essay, it's important to keep your audience in mind. Think about who will be reading your essay and what they might be interested in. Use language that is appropriate for your audience and make sure your arguments are relevant to their interests.</p>
      <p>Finally, when you've finished writing your essay, be sure to proofread and edit carefully. Check for spelling and grammar errors, and make sure your ideas are presented clearly and logically.</p>
      <p>By following these tips, you can write a successful essay that showcases your ideas and writing skills. So don't be afraid to tackle that essay assignment and show off your knowledge and creativity!</p>
    </main>
    </Layout>
  )
}

export default Page;
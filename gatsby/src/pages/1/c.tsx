import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 1C</h2>
      <Link to="/1">Go Back</Link>
      
      <h3>Gumbo</h3>
      <p>Once upon a time, in a land far, far away, there lived a purple elephant named Gumbo. Gumbo loved to eat spaghetti with maple syrup, and he would often spend hours in his kitchen cooking up the most bizarre concoctions.</p>
      <p>One day, Gumbo decided to venture out into the forest to see what he could find. As he strolled through the trees, he came across a group of talking mushrooms who were arguing about who had the biggest nose.</p>
      <p>Gumbo, being a polite elephant, decided to intervene and settled the argument by telling the mushrooms that they all had lovely noses, regardless of their size.</p>
      <p>The mushrooms were so impressed with Gumbo's kindness that they invited him to a tea party that they were having later that day. Gumbo gladly accepted and went on his way.</p>
      <p>As Gumbo continued his walk through the forest, he stumbled upon a group of unicorns who were playing leapfrog. Gumbo decided to join in the game, and to everyone's surprise, he turned out to be the best leaper of them all!</p>
      <p>The unicorns were so impressed with Gumbo's skills that they asked him to be their captain and lead them in the annual unicorn games. Gumbo, being the adventurous elephant that he was, accepted the offer and set off with the unicorns to the games.</p>
      <p>When they arrived at the games, they were met with a group of angry gnomes who were protesting the use of magic in the games. Gumbo, being the diplomat that he was, decided to mediate the situation and came up with a compromise that satisfied both the gnomes and the unicorns.</p>
      <p>The games began, and Gumbo led his team to victory, much to the delight of the cheering crowd. As a reward for his leadership, the unicorns gave Gumbo a magical amulet that would grant him unlimited spaghetti and maple syrup for life.</p>
      <p>Gumbo was thrilled with his new amulet and decided to head back to his kitchen to whip up some more delicious spaghetti. As he cooked, he sang a song about the talking mushrooms, the leapfrog-playing unicorns, and the protesting gnomes.</p>
      <p>And so, Gumbo lived happily ever after, cooking up his bizarre spaghetti creations and singing songs about his adventures in the forest.</p>
    </main>
    </Layout>
  )
}

export default Page;

export const Head = () => (
  <>
    <title>Sample App - Gatsby</title>
    <link rel="icon" href="/lion.ico" />
  </>
)
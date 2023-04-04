import { Link } from "gatsby";
import React from "react";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <main>
        <h2>Welcome to this sample app</h2>
        <p>Hello world, I'm here for performance testing!</p>

        <h3>Pages</h3>
        <p>
          This app contains 34 pages, including this one. There are 3 menu pages, with each one linking to 10 pages.
        </p>

        <p>Here are the 3 menu pages</p>
        <ul>
          <li><Link to="/1">Menu 1</Link></li>
          <li><Link to="/2">Menu 2</Link></li>
          <li><Link to="/3">Menu 3</Link></li>
        </ul>

        <h3>Lorem Ipsum</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet odio nec mauris faucibus facilisis vel at velit. Ut interdum mattis lacus a scelerisque. Donec pretium, mauris nec vehicula feugiat, ex lectus ornare purus, sed accumsan felis dolor vel ipsum. Vivamus et iaculis quam. Praesent gravida sit amet leo non auctor. Pellentesque hendrerit a metus sit amet tincidunt. In id porttitor ligula. Cras ante felis, rutrum a nibh id, porttitor ultrices augue. Donec eget dignissim tortor, eu hendrerit diam. Curabitur urna lacus, maximus pulvinar odio quis, posuere maximus nulla.
        </p>
        <p>
        Donec viverra ex vel dolor euismod lacinia. Proin elementum pulvinar nisl venenatis interdum. Donec varius congue feugiat. Phasellus porttitor facilisis purus ut pharetra. Donec eget feugiat felis. Pellentesque tortor turpis, placerat porttitor interdum eget, eleifend sit amet velit. Praesent laoreet efficitur eros ut pulvinar. Duis placerat ipsum ut consectetur vulputate. Proin finibus tortor quis interdum pellentesque. Nunc facilisis lorem at lacus imperdiet scelerisque. Suspendisse a odio vel felis dictum vulputate at at elit. Suspendisse commodo dolor a eros tempor porta.
        </p>
        <p>
        Ut vestibulum laoreet lectus, id fringilla lacus volutpat vitae. Vivamus eget bibendum leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse quam mauris, lobortis ac finibus aliquam, euismod et odio. Fusce mollis enim sapien, ac mattis sapien tincidunt interdum. Fusce feugiat odio vel ultrices dapibus. Etiam velit dolor, blandit in consequat id, pretium ac turpis. Fusce mattis lorem a nulla vulputate, at suscipit mi interdum.
        </p>
        <p>
        Phasellus congue libero vitae mi varius, a ultricies felis sagittis. Phasellus erat tortor, tristique non urna ac, cursus ultrices ligula. Integer elit nisi, consequat vitae porta commodo, fermentum ut massa. Quisque vitae sem id nibh varius cursus. Suspendisse tellus eros, consequat maximus posuere eu, pulvinar non nisl. Aliquam eget aliquam diam. Duis venenatis imperdiet ullamcorper. Praesent vestibulum imperdiet mi, bibendum convallis orci condimentum blandit.
        </p>
        <p>
        Donec condimentum ante massa, ac aliquam orci facilisis sit amet. Duis feugiat sed dui in consectetur. Suspendisse hendrerit dui ut ante laoreet scelerisque. Fusce mattis nulla euismod elit egestas molestie. Quisque consectetur nunc et egestas dictum. Nullam nunc turpis, sollicitudin non leo sed, pellentesque vestibulum erat. Morbi scelerisque iaculis mollis. Vivamus blandit lobortis metus, quis consectetur ex volutpat vel. Maecenas blandit nunc non ipsum consectetur ultrices. Suspendisse cursus odio eget pretium pharetra. Vestibulum sagittis volutpat tortor, at blandit erat tristique eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum gravida nunc eget elit congue, sit amet congue felis viverra. Praesent a laoreet ante. Fusce blandit sed odio ut mollis.
        </p>
      </main>
    </Layout>
  )
}

export default Home;

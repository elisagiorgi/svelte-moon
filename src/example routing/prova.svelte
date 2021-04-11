
<script>
	import { Router, Link, Route } from "svelte-routing";
	import Catalog from "./pages/catalog/catalog.svelte";
	import Home from "./pages/home/home.svelte";
	let url ="";

</script>

<Router url="{url}">
	<nav>
	  <Link to="/">Home</Link>
	  <Link to="home">Home</Link>
	  <Link to="catalog">Catalog</Link>
	</nav>
	<div>
	  <Route path="home" component="{Home}" />
	  <Route path="catalog" component="{Catalog}" />
	  <Route path="/"><Home /></Route>
	</div>
  </Router>
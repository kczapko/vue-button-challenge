<template>
  <div class="page">
    <header>
      <h1>Buton Challenge</h1>
    </header>
    <main>
      <h2>Default button</h2>
      <ul class="g-2">
        <li>
          <code>&lt;app-button> Default &lt;/app-button></code>
          <app-button> Default </app-button>
        </li>
        <li>
          <code>&lt;app-button disabled> Default &lt;/app-button></code>
          <app-button disabled> Default </app-button>
        </li>
      </ul>
      <h2>Default button, variant outline</h2>
      <ul class="g-2">
        <li>
          <code
            >&lt;app-button variant="outline"><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button variant="outline"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button variant="outline" disabled><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button variant="outline" disabled> Default </app-button>
        </li>
      </ul>
      <h2>Default button, variant text</h2>
      <ul class="g-2">
        <li>
          <code
            >&lt;app-button variant="text"><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button variant="text"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button variant="text" disabled><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button variant="text" disabled> Default </app-button>
        </li>
      </ul>
      <h2>Default button, no shadow</h2>
      <ul>
        <li>
          <code>&lt;app-button disableShadow> Default &lt;/app-button></code>
          <app-button disableShadow> Default </app-button>
        </li>
      </ul>
      <h2>Default button with icons</h2>
      <ul class="g-5">
        <li>
          <code
            >&lt;app-button startIcon="add_shopping_cart"><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button startIcon="add_shopping_cart"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button startIcon="settings"<br />
            disableShadow><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button startIcon="settings" disableShadow> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button startIcon="logout"<br />
            disabled><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button startIcon="logout" disabled> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button startIcon="star_rate"<br />
            variant="text"><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button startIcon="star_rate" variant="text"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button startIcon="pets"<br />
            variant="outline"><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button startIcon="pets" variant="outline"> Default </app-button>
        </li>
      </ul>
      <ul class="g-5">
        <li>
          <code
            >&lt;app-button endIcon="add_shopping_cart"><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button endIcon="add_shopping_cart"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button endIcon="settings"<br />
            disableShadow><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button endIcon="settings" disableShadow> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button endIcon="logout"<br />
            disabled><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button endIcon="logout" disabled> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button endIcon="star_rate"<br />
            variant="text"><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button endIcon="star_rate" variant="text"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button endIcon="pets"<br />
            variant="outline"><br />
            Default<br />
            &lt;/app-button></code
          >
          <app-button endIcon="pets" variant="outline"> Default </app-button>
        </li>
      </ul>
      <h2>Default button sizes</h2>
      <ul class="g-3">
        <li>
          <code>&lt;app-button size="sm"> Default &lt;/app-button></code>
          <app-button size="sm"> Default </app-button>
        </li>
        <li>
          <code>&lt;app-button size="md"> Default &lt;/app-button></code>
          <app-button size="md"> Default </app-button>
        </li>
        <li>
          <code>&lt;app-button size="lg"> Default &lt;/app-button></code>
          <app-button size="lg"> Default </app-button>
        </li>
      </ul>
      <h2>Colored buttons</h2>
      <ul class="g-4">
        <li>
          <code
            >&lt;app-button color="default"><br />
            Default <br />
            &lt;/app-button></code
          >
          <app-button color="default"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="primary"><br />
            Primary <br />
            &lt;/app-button></code
          >
          <app-button color="primary"> Primary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="secondary"><br />
            Secondary <br />
            &lt;/app-button></code
          >
          <app-button color="secondary"> Secondary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="danger"><br />
            Danger <br />
            &lt;/app-button></code
          >
          <app-button color="danger"> Danger </app-button>
        </li>
      </ul>
      <ul class="g-4">
        <li>
          <code
            >&lt;app-button color="default" disabled><br />
            Default <br />
            &lt;/app-button></code
          >
          <app-button color="default" disabled> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="primary" disabled><br />
            Primary <br />
            &lt;/app-button></code
          >
          <app-button color="primary" disabled> Primary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="secondary" disabled><br />
            Secondary <br />
            &lt;/app-button></code
          >
          <app-button color="secondary" disabled> Secondary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="danger" disabled><br />
            Danger <br />
            &lt;/app-button></code
          >
          <app-button color="danger" disabled> Danger </app-button>
        </li>
      </ul>
      <ul class="g-4">
        <li>
          <code
            >&lt;app-button color="default"<br />
            variant="outline"><br />
            Default <br />
            &lt;/app-button></code
          >
          <app-button color="default" variant="outline"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="primary"<br />
            variant="outline"><br />
            Primary <br />
            &lt;/app-button></code
          >
          <app-button color="primary" variant="outline"> Primary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="secondary"<br />
            variant="outline"><br />
            Secondary <br />
            &lt;/app-button></code
          >
          <app-button color="secondary" variant="outline"> Secondary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="danger"<br />
            variant="outline"><br />
            Danger <br />
            &lt;/app-button></code
          >
          <app-button color="danger" variant="outline"> Danger </app-button>
        </li>
      </ul>
      <ul class="g-4">
        <li>
          <code
            >&lt;app-button color="default"<br />
            variant="text"><br />
            Default <br />
            &lt;/app-button></code
          >
          <app-button color="default" variant="text"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="primary"<br />
            variant="text"><br />
            Primary <br />
            &lt;/app-button></code
          >
          <app-button color="primary" variant="text"> Primary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="secondary"<br />
            variant="text"><br />
            Secondary <br />
            &lt;/app-button></code
          >
          <app-button color="secondary" variant="text"> Secondary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="danger"<br />
            variant="text"><br />
            Danger <br />
            &lt;/app-button></code
          >
          <app-button color="danger" variant="text"> Danger </app-button>
        </li>
      </ul>
      <ul class="g-4">
        <li>
          <code
            >&lt;app-button color="default"<br />
            startIcon="pets"><br />
            Default <br />
            &lt;/app-button></code
          >
          <app-button color="default" startIcon="pets"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="primary"<br />
            startIcon="pets"><br />
            Primary <br />
            &lt;/app-button></code
          >
          <app-button color="primary" startIcon="pets"> Primary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="secondary"<br />
            startIcon="pets"><br />
            Secondary <br />
            &lt;/app-button></code
          >
          <app-button color="secondary" startIcon="pets"> Secondary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="danger"<br />
            startIcon="pets"><br />
            Danger <br />
            &lt;/app-button></code
          >
          <app-button color="danger" startIcon="pets"> Danger </app-button>
        </li>
      </ul>
      <ul class="g-4">
        <li>
          <code
            >&lt;app-button color="default"<br />
            endIcon="settings"><br />
            Default <br />
            &lt;/app-button></code
          >
          <app-button color="default" endIcon="settings"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="primary"<br />
            endIcon="settings"><br />
            Primary <br />
            &lt;/app-button></code
          >
          <app-button color="primary" endIcon="settings"> Primary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="secondary"<br />
            endIcon="settings"><br />
            Secondary <br />
            &lt;/app-button></code
          >
          <app-button color="secondary" endIcon="settings"> Secondary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="danger"<br />
            endIcon="settings"><br />
            Danger <br />
            &lt;/app-button></code
          >
          <app-button color="danger" endIcon="settings"> Danger </app-button>
        </li>
      </ul>
      <ul class="g-4">
        <li>
          <code
            >&lt;app-button color="default"<br />
            size="sm"><br />
            Default <br />
            &lt;/app-button></code
          >
          <app-button color="default" size="sm"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="primary"<br />
            size="sm"><br />
            Primary <br />
            &lt;/app-button></code
          >
          <app-button color="primary" size="sm"> Primary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="secondary"<br />
            size="sm"><br />
            Secondary <br />
            &lt;/app-button></code
          >
          <app-button color="secondary" size="sm"> Secondary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="danger"<br />
            size="sm"><br />
            Danger <br />
            &lt;/app-button></code
          >
          <app-button color="danger" size="sm"> Danger </app-button>
        </li>
      </ul>
      <ul class="g-4">
        <li>
          <code
            >&lt;app-button color="default"<br />
            size="lg"><br />
            Default <br />
            &lt;/app-button></code
          >
          <app-button color="default" size="lg"> Default </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="primary"<br />
            size="lg"><br />
            Primary <br />
            &lt;/app-button></code
          >
          <app-button color="primary" size="lg"> Primary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="secondary"<br />
            size="lg"><br />
            Secondary <br />
            &lt;/app-button></code
          >
          <app-button color="secondary" size="lg"> Secondary </app-button>
        </li>
        <li>
          <code
            >&lt;app-button color="danger"<br />
            size="lg"><br />
            Danger <br />
            &lt;/app-button></code
          >
          <app-button color="danger" size="lg"> Danger </app-button>
        </li>
      </ul>
    </main>
    <footer>Krzysztof Czapko @ DevChallenges.io</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}

h1,
h2,
footer {
  font-family: 'Poppins', sans-serif;
}

h1 {
  font-size: 32px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 60px;
}

h2 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
}

footer {
  font-size: 14px;
  color: #a9a9a9;
  text-align: center;
  margin-top: 60px;
  padding: 20px 0;
  border-top: 1px solid #ccc;
}

main {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
}

ul {
  margin: 0 0 60px;
  padding: 0;
  list-style: none;
  display: grid;

  text-align: center;

  &.g-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  &.g-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  &.g-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  &.g-5 {
    grid-template-columns: repeat(5, 1fr);
  }

  li {
    display: grid;
    justify-items: center;
    align-content: space-between;
  }

  code {
    display: block;
    margin-bottom: 10px;
    white-space: pre;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 12px;
  }
}
</style>

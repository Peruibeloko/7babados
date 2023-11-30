<script setup></script>

<template>
  <article class="product">
    <ContentSlot :use="$slots.foto" unwrap="p" />
    <div class="info">
      <span class="name">
        <ContentSlot :use="$slots.nome" unwrap="p" />
      </span>
      <span class="size">
        <ContentSlot :use="$slots.tamanho" unwrap="p" />
      </span>
      <span class="price"> R$<ContentSlot :use="$slots.preco" unwrap="p" /></span>
    </div>
  </article>
</template>

<style lang="scss">
article.product {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid var(--theme-purple-dark);
  border-radius: 1.5rem;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0px 0px 3px 0px hsl(0, 0%, 80%);

  img {
    width: 100%;
    margin-bottom: 0.5rem;
    border: 1px solid var(--theme-purple-dark);
    border-radius: 1rem;
  }

  div.info {
    display: flex;
    flex-direction: column;

    span {
      font-family: 'Lato';
    }
  }

  span.name, span.size {
    font-weight: 300;
  }

  span.size {
    margin-bottom: 0.5rem;
  }

  span.price {
    font-weight: bold;
  }
}
</style>

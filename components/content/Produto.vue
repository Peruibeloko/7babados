<script setup></script>

<template>
  <article class="product">
    <ContentSlot :use="$slots.foto" unwrap="p" />
    <span class="name">
      <ContentSlot :use="$slots.nome" unwrap="p" />
    </span>
    <span class="color">
      <ContentSlot :use="$slots.cor" unwrap="p" />
    </span>
    <span class="price"> R$<ContentSlot :use="$slots.preco" unwrap="p" /> </span>
  </article>
</template>

<style lang="scss">
article.product {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 1rem;

  img {
    width: 100%;
  }
}
</style>

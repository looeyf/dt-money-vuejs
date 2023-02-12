<script setup lang="ts">
import Card from '@/components/Card.vue';
</script>

<template>
  <div class="container pt-0">
    <div class="summary">
      <Card type="Entradas" :value="17400.0" />
      <Card type="Saídas" :value="1259.0" />
      <Card type="Total" :value="16141.0" />
    </div>

    <div class="table">
      <div class="table-row table-header">
        <span class="column-title">Título</span>
        <span class="column-value">Preço</span>
        <span class="column-category">Categoria</span>
        <span class="column-date">Data</span>
      </div>

      <div class="table-body">
        <div class="table-row">
          <span class="column-title">Desenvolvimento de site</span>
          <span :class="['column-value', 'column-value--outcome']">- R$ 12.000,00</span>
          <span class="column-category">Venda</span>
          <span class="column-date">13/04/2021</span>
        </div>

        <div class="table-row">
          <span class="column-title">Desenvolvimento de site</span>
          <span :class="['column-value']">R$ 12.000,00</span>
          <span class="column-category">Venda</span>
          <span class="column-date">13/04/2021</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;

  :deep(.card) {
    transform: translateY(-50%);
  }
}

.table {
  display: flex;
  flex-direction: column;
  color: var(--text-body);

  &-row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0.5rem;
    padding: 1.25rem 2rem;

    > span {
      &.column {
        &-title {
          grid-column: span 5;
        }
        &-value {
          grid-column: span 3;
        }
        &-category {
          grid-column: span 3;
        }
        &-date {
          grid-column: span 1;
        }
      }
    }
  }

  &-header {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .table-row {
      background-color: var(--shape);
      border-radius: 4px;

      .column {
        &-title {
          color: var(--text-title);
        }
        &-value {
          color: var(--green);

          &--outcome {
            color: var(--red);
          }
        }
      }
    }
  }
}
</style>

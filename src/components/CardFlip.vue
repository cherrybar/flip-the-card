<template>
  <div class="card-flip">
    <CardsList :cards />
    <button
      class="card-flip__button"
      :class="{ 'card-flip__button--disabled': isMiddleCardFlipped }"
      :disabled="isMiddleCardFlipped"
      @click="flipCard"
    >
      Открыть карту
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";
import { CardType, CardValue, ICard } from "@/types";
import CardsList from "@/components/CardsList.vue";

const cards = reactive<ICard[]>([
  { id: 1, isFlipped: false, type: CardType.Diamonds, value: CardValue.King },
  { id: 2, isFlipped: false, type: CardType.Clubs, value: CardValue.Ace },
  { id: 3, isFlipped: false, type: CardType.Hearts, value: CardValue.Jack },
]);

const middleCard = computed(() => cards.find(({ id }) => id === 2));
const isMiddleCardFlipped = computed(() => middleCard.value?.isFlipped);

const flipCard = () => {
  if (!middleCard.value) {
    return;
  }

  middleCard.value.isFlipped = true;
};
</script>

<style scoped>
.card-flip {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-flip__button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  background: #4456fe;
  color: #ffffff;
  max-width: 240px;
}

.card-flip__button--disabled {
  cursor: default;
  opacity: 0.5;
}
</style>

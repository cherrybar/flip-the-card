<template>
  <div class="cards-list">
    <div
      class="card"
      v-for="card in cards"
      :key="card.id"
      :class="{ 'card--flipped': card.isFlipped }"
    >
      <div class="card__front" />
      <div class="card__back">
        <div class="card__back-value">{{ card.value }}</div>
        <div class="card__back-type" :class="`card__back-type--${card.type}`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICard } from "@/types";

interface IProps {
  cards: ICard[];
}

defineProps<IProps>();
</script>

<style scoped>
.cards-list {
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 50vw;
}

.card {
  width: 160px;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  aspect-ratio: 2 / 3;
}

.card--flipped {
  transform: rotateY(180deg) translateY(-50%);
}

.card__front,
.card__back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
}

.card__front {
  background-color: #dd385f;
}

.card__back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #fff;
}

.card__back-type {
  width: 25px;
  height: 25px;
  background-size: contain;
  background-repeat: no-repeat;
}

.card__back-type--clubs {
  background-image: url("assets/clubs-icon.svg");
}

@media (max-width: 480px) {
  .cards-list {
    width: 90vw;
  }
}
</style>

<template>
    <main>
        <section class="container">
            <h1>Sobre</h1>

            <div class="about" v-html="about.about"></div>
        </section>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import api from '@/services/api'
import Sobre from '@/common/interfaces/sobre'

@Component({
    name: 'WdevSobre'
})
export default class WdevSobre extends Vue{
    
    public about: Sobre = {
        about: ''
    };

    mounted(): void {
        api.get('/about.json').then(res => {
            this.about = res.data;
        });
    }
}
</script>

<style scoped>
    main{
        align-items: center;
    }

    .about {
        margin-bottom: 40px;
        color: var(--color-text-dark);
    }
</style>

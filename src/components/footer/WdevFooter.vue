<template>
    <footer id="wdev-footer">
        <a class="socialLink" :href="socialLink.link" v-for="(socialLink, idx) in socialLinks" :key="idx" target="_blank">
            <img :alt="socialLink.label" :title="socialLink.title" :src="socialLink.icon">
        </a>
    </footer>
</template>

<script lang="ts">
import Vue from "vue";
import api from '@/services/api'
import SocialLink from '@/common/interfaces/socialLink'
import Component from "vue-class-component";

@Component({
    name: 'WdveFooter',
    components: {}
})
export default class WdevFoote extends Vue{
    
    public socialLinks: Array<SocialLink> = [];

    mounted(): void {
        api.get('/social-links.json').then(res => {
            this.socialLinks = res.data;
        })
    }

}
</script>

<style scoped>

    footer {
        width: 100%;
        height: 60px;
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .socialLink {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--color-text-light);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 0 10px;
    }

    .socialLink img {
        width: 20px;
    }

</style>
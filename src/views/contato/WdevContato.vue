<template>
    <main id="wdev-contato">
        <section class="container">
            <h1>Contato</h1>

            <section class="contacts">
                <div class="contact" v-for="(contact, idx) in contacts" :key="idx">
                    <div class="contact-title">{{ contact.title }}</div>
                    <a :href="contact.link" target="_blank">{{ contact.label }}</a>
                </div>
            </section>
        </section>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import Contato from '@/common/interfaces/contato'
import api from '@/services/api';

@Component({
    name: 'WdevContato'
})
export default class WdevContato extends Vue{
    
    public contacts: Array<Contato> = [];

    mounted(): void {

        api.get('/contacts.json').then(res => {
            this.contacts = res.data;
        })

    }

}
</script>

<style scoped>
    main{
        align-items: center;
    }

    .contacts{
        margin-bottom: 40px;
        color: var(--color-text-dark);
    }

    .contact-title{
        font-weight: 600;
        font-size: 18px;
    }

    .contact {
        margin-bottom: 20px;
    }

    .contact a{
        color: var(--color-text-dark);
    }
</style>
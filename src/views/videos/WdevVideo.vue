<template>
    <main id="wdev-video">

        <section class="container">
            <h1>Vídeos</h1>

            <section class="videos">
                <div class="video" v-for="(video, idx) in videos" :key="idx">
                    <a :href="video.link" target="_blank">
                        <img :alt="video.title" :title="video.title" :src="video.thumb">
                        <div class="video-title">{{video.title}}</div>
                    </a>
                </div>
            </section>
        </section>

    </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import api from '@/services/api'
import Video from '@/common/interfaces/video'

@Component({
    name: 'WdevVideo'
})
export default class WdevVideo extends Vue{
    
    public videos: Array<Video> = [];

    mounted(): void {
        api.get('/videos.json').then(res => {
            this.videos = res.data;
        })
    }

}
</script>

<style scoped>
    main{
        display: flex;
        align-items: center;
    }

    .videos {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .video {
        width: 300px;
        margin-bottom: 30px;
    }

    .video a {
        color: var(--color-text-dark);
        font-weight: 600;
        text-align: center;
    }

    .videos img {
        width: 100%;
    }

    @media (min-width: 700px) {
        .videos {
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
        }

        .video {
            margin-right: 30px;
        }
    }
</style>
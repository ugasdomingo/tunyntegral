<script setup lang="ts">
import { values } from '@/static/aboutCompany';
</script>

<template>
    <main class="page">
        <h2>Tunyntegral</h2>
        <h3>Tu empresa de rotulación corporativa en Madrid</h3>
        <section class="content">
            <div class="history">
                <h4>Nuestra historia</h4>
                <p>
                    Comenzamos nuestra andadura en Madrid en el año 2004, con la
                    <span>aplicación de vinilos y montaje de rótulos </span>,
                    rótulos luminosos y letras corpóreas para otras empresas.
                </p>
                <p>
                    Desde entonces, hemos ido evolucionando e
                    <span>
                        incorporando las últimas tecnologías y materiales
                        innovadores
                    </span>
                    para cubrir todas las necesidades de nuestros clientes.
                </p>
                <p>
                    En Tunyntegral somos conscientes de
                    <span>lo importante que es una primera impresión</span>. Por
                    eso, te ayudamos a
                    <span>cuidar tu imagen corporativa</span>, para que sea
                    acorde a tus principios y valores.
                </p>
            </div>
            <div class="especialist">
                <h4>Especialistas en rotulación en Madrid</h4>
                <p>
                    Nuestra pasión es la rotulación, consideramos que es la
                    mejor combinación entre publicidad y estética para un local
                    u empresa. Es uno de nuestros servicios estrella.
                </p>
                <p>
                    Nos avalan nuestros años de experiencia y nuestros clientes
                    son nuestra mayor preocupación. Nos caracteriza nuestro
                    trato cercano, nuestro equipo de profesionales a tu
                    disposición y los mejores materiales del mercado.
                </p>
            </div>
            <div class="valores">
                <h4>Nuestros valores</h4>
                <ul>
                    <li v-for="value in values" :key="value.name">
                        <span>{{ value.name }}</span>
                        <p>{{ value.description }}</p>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
.page {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    h2 {
        margin-bottom: 1rem;
        text-align: center;
    }
    h3 {
        margin-bottom: 2rem;
        text-align: center;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        .history,
        .especialist,
        .valores {
            margin-bottom: 2rem;
            h4 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            p {
                margin-bottom: 1rem;
                span {
                    font-weight: bold;
                }
            }
            ul {
                list-style: none;
                li {
                    margin-bottom: 1rem;
                    span {
                        font-weight: bold;
                    }
                }
            }
        }
        .history {
            padding-right: 50%;
        }
        .especialist {
            padding-left: 50%;
        }
        .valores {
            padding-right: 50%;
        }
    }
}
</style>

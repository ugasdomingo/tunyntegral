<script setup lang="ts"></script>

<template>
    <section class="hero">
        <img
            src="https://img.freepik.com/free-photo/exploding-multi-colored-flame-creates-abstract-futuristic-design-generated-by-ai_188544-9861.jpg?w=826&t=st=1706867137~exp=1706867737~hmac=de22ef392c6aedba733a2c16eef740391d5c87dbc2144870ebb80e1cd81e1f0c"
            class="background"
            alt="Hero-background"
        />
        <section class="content-section">
            <h1>Hazte<br />Notar</h1>
            <div class="action">
                <h5>Somos Visibilidad para tu Negocio</h5>
                <p>
                    Solicita un presupuesto para mostrar tu negocio a lo grande
                </p>
                <a href="#services">Ver Servicios</a>
            </div>
        </section>
    </section>
</template>

<style scoped lang="scss">
.hero {
    height: 100vh;
    position: relative;
    box-sizing: border-box;
    .background {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .content-section {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        padding: 0 4rem;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(4px);

        h1 {
            margin-bottom: 1rem;
        }
        .action {
            h5 {
                font-size: 1.5rem;
                margin: 0;
            }
            p {
                margin: 0.5rem 0 1.2rem;
            }
            a {
                text-decoration: none;
                padding: 0.5rem 1rem;
                margin-top: 1rem;
                background-color: var(--color-warning);
                color: var(--color-white);
                border: none;
                border-radius: 0.5rem;
                font-size: 1.2rem;
                transition: 0.3s;
                cursor: pointer;
                &:hover {
                    background-color: var(--color-secondary);
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .hero {
        width: 100%;
        .background {
            object-fit: cover;
        }
        .content-section {
            width: 100%;
            padding: 0 2rem;
        }
    }
}
</style>

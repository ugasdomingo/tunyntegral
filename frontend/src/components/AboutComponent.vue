<script setup lang="ts"></script>

<template>
    <section class="about">
        <img
            class="background-image"
            src="https://img.freepik.com/free-photo/vibrant-colors-swirling-futuristic-underwater-chaos-generated-by-ai_188544-9692.jpg?t=st=1710180758~exp=1710184358~hmac=4248207678fb4c824f302f1fc2d625037e50a72d01d9ce1ef81d84a31b5dab9c&w=826"
            alt="Background about"
        />
        <h2>Especialistas en Rotulación</h2>
        <div class="content">
            <p>
                En Tunyntegral, entendemos la trascendencia de la primera
                impresión y nos apasiona ser tus aliados en la construcción de
                una imagen corporativa que refleje fielmente tus principios y
                valores. Juntos, hagamos que cada detalle cuente en la expresión
                auténtica de tu identidad.
            </p>
            <div class="contact">
                <h3>Consíguenos en las Redes Sociales</h3>
                <div class="social-media">
                    <a href="" class="icons" target="_blank">
                        <img src="../assets/linkedin.svg" alt="icono twitter" />
                    </a>
                    <a
                        href="https://www.instagram.com/tunyntegralsl/"
                        class="icons"
                        target="_blank"
                    >
                        <img
                            src="../assets/instagram.svg"
                            alt="icono instagram"
                        />
                    </a>
                    <a href="" class="icons" target="_blank">
                        <img
                            src="../assets/facebook.svg"
                            alt="icono facebook"
                        />
                    </a>
                </div>
            </div>
        </div>
        <RouterLink class="about-btn" to="/conocenos"
            >Saber más de Tunyntegral</RouterLink
        >
    </section>
</template>

<style scoped lang="scss">
.about {
    padding: 4rem;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    .background-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.5;
    }
    h2 {
        margin-bottom: 3rem;
    }
    .content {
        display: flex;
        justify-content: space-between;

        p {
            width: 50%;
            text-align: left;
        }

        .contact {
            width: 40%;
            padding: 8rem 0;
            h3 {
                margin-bottom: 1rem;
            }
            .social-media {
                display: flex;
                justify-content: space-around;
                gap: 1rem;
                .icons {
                    position: relative;
                    img {
                        width: 2.5rem;
                        height: 2.5rem;
                        object-fit: cover;
                        transition: transform 0.3s;
                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }
            }
        }
    }

    .about-btn {
        width: 30%;
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        text-decoration: none;
        background-color: var(--color-secondary);
        color: #fff;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
            background-color: var(--color-accent);
        }
    }
}

@media screen and (max-width: 768px) {
    .about {
        padding: 2rem;
        min-height: 100vh;
        h2 {
            margin-bottom: 2rem;
        }
        .content {
            flex-direction: column;
            gap: 2rem;
            p {
                width: 100%;
            }
            .contact {
                width: 100%;
                padding: 2rem 0 4rem;
            }
        }
        button {
            width: 80%;
            bottom: 1.5rem;
        }
    }
}
</style>

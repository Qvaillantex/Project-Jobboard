import React from 'react';
import Link from 'next/link'
import styles from "/styles/infopages.module.css";
import Image from 'next/image';
import Sommaire from './Sommaire.js'
const titres={
    titre1: "T1",
    titre2: "T2",
    titre3: "T3",
    titre4: "T4",
    titre5: "T5",
}

const cgu = () => {
    return (

        <div className={styles.page}>
            <div className={styles.sommaire}>
            <div className={styles.barresommaire}>
            <Sommaire titre = {titres}/>
            </div>
            </div>
            <div className={styles.text}>
                <div id="first-section" className={styles.paragraph}>
                <h1>{titres.titre1}</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div id="second-section" className={styles.paragraph}>
                <h1>{titres.titre2}</h1>
                    <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sollicitudin nulla, sit amet sollicitudin tellus accumsan ut. Suspendisse eget risus egestas, lacinia velit sed, maximus quam. Aliquam dapibus et velit quis varius. Nullam tempus eget felis in sagittis. Fusce cursus neque non quam accumsan, eu pharetra purus porta. Nullam venenatis a turpis condimentum volutpat. Nam mollis feugiat mauris sed convallis. Suspendisse ultricies, magna id molestie tempus, lorem eros pretium nibh, sed luctus lectus nulla vitae augue. Etiam efficitur metus nulla, nec volutpat erat lobortis porta.

                    In mollis diam et nunc maximus, eu malesuada nibh imperdiet. Vivamus quam ligula, scelerisque pulvinar consectetur quis, maximus id risus. Fusce consectetur risus et risus blandit viverra. Nullam convallis mattis ornare. Sed tristique pulvinar nisi, id dapibus nisi auctor feugiat. Duis vitae accumsan tortor. Maecenas bibendum nec justo ac pulvinar. Proin fermentum dui velit, et consequat urna convallis a. Etiam bibendum tristique ipsum, quis condimentum libero ultricies in. Nam quis nulla nec mi feugiat venenatis sed nec urna. Aenean urna justo, eleifend sit amet gravida id, pharetra a nulla. Maecenas viverra orci ex, et blandit nibh tempus a. Donec at leo leo.

                    Etiam vel congue tellus. Pellentesque vitae lectus id erat luctus tincidunt eu vel sapien. Proin mattis egestas arcu, eu maximus justo ornare ut. Suspendisse facilisis id augue vitae ultricies. Aenean non ex libero. Quisque imperdiet dolor accumsan eleifend dignissim. Aenean sagittis ac leo non pretium.

                    Quisque consequat congue porttitor. Nulla hendrerit est massa, et mattis massa aliquet vel. Pellentesque a sem blandit neque posuere finibus quis elementum velit. Donec tincidunt mollis sollicitudin. Maecenas nec ullamcorper est. Nullam sit amet massa ac dolor dignissim consectetur sit amet sit amet ex. Sed feugiat porttitor nunc. Pellentesque vitae quam fringilla, tempor neque vel, pharetra magna. Aliquam erat lectus, mattis mollis ipsum a, luctus euismod dolor.

                    Fusce arcu dolor, placerat a ornare eu, cursus ac massa. Nam a placerat mauris, pharetra efficitur mi. Donec tincidunt nunc finibus lorem auctor placerat. Donec a odio sit amet lorem sodales tincidunt. Nulla fermentum hendrerit nisl, ut venenatis purus posuere non. Proin non quam non enim lobortis scelerisque. Etiam velit ante, pellentesque quis ex eget, gravida varius diam. Proin eget enim leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur feugiat felis non lectus elementum congue. Aliquam nibh nunc, suscipit quis iaculis id, mollis eu augue.
                    </p>
                
                </div>
                <div id="third-section" className={styles.paragraph}>
                <h1>{titres.titre3}</h1>
                    <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sollicitudin nulla, sit amet sollicitudin tellus accumsan ut. Suspendisse eget risus egestas, lacinia velit sed, maximus quam. Aliquam dapibus et velit quis varius. Nullam tempus eget felis in sagittis. Fusce cursus neque non quam accumsan, eu pharetra purus porta. Nullam venenatis a turpis condimentum volutpat. Nam mollis feugiat mauris sed convallis. Suspendisse ultricies, magna id molestie tempus, lorem eros pretium nibh, sed luctus lectus nulla vitae augue. Etiam efficitur metus nulla, nec volutpat erat lobortis porta.

                    In mollis diam et nunc maximus, eu malesuada nibh imperdiet. Vivamus quam ligula, scelerisque pulvinar consectetur quis, maximus id risus. Fusce consectetur risus et risus blandit viverra. Nullam convallis mattis ornare. Sed tristique pulvinar nisi, id dapibus nisi auctor feugiat. Duis vitae accumsan tortor. Maecenas bibendum nec justo ac pulvinar. Proin fermentum dui velit, et consequat urna convallis a. Etiam bibendum tristique ipsum, quis condimentum libero ultricies in. Nam quis nulla nec mi feugiat venenatis sed nec urna. Aenean urna justo, eleifend sit amet gravida id, pharetra a nulla. Maecenas viverra orci ex, et blandit nibh tempus a. Donec at leo leo.

                    Etiam vel congue tellus. Pellentesque vitae lectus id erat luctus tincidunt eu vel sapien. Proin mattis egestas arcu, eu maximus justo ornare ut. Suspendisse facilisis id augue vitae ultricies. Aenean non ex libero. Quisque imperdiet dolor accumsan eleifend dignissim. Aenean sagittis ac leo non pretium.

                    Quisque consequat congue porttitor. Nulla hendrerit est massa, et mattis massa aliquet vel. Pellentesque a sem blandit neque posuere finibus quis elementum velit. Donec tincidunt mollis sollicitudin. Maecenas nec ullamcorper est. Nullam sit amet massa ac dolor dignissim consectetur sit amet sit amet ex. Sed feugiat porttitor nunc. Pellentesque vitae quam fringilla, tempor neque vel, pharetra magna. Aliquam erat lectus, mattis mollis ipsum a, luctus euismod dolor.

                    Fusce arcu dolor, placerat a ornare eu, cursus ac massa. Nam a placerat mauris, pharetra efficitur mi. Donec tincidunt nunc finibus lorem auctor placerat. Donec a odio sit amet lorem sodales tincidunt. Nulla fermentum hendrerit nisl, ut venenatis purus posuere non. Proin non quam non enim lobortis scelerisque. Etiam velit ante, pellentesque quis ex eget, gravida varius diam. Proin eget enim leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur feugiat felis non lectus elementum congue. Aliquam nibh nunc, suscipit quis iaculis id, mollis eu augue.
                    </p>
                
                </div>
                <div id="fourth-section" className={styles.paragraph}>
                <h1>{titres.titre4}</h1>
                    <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sollicitudin nulla, sit amet sollicitudin tellus accumsan ut. Suspendisse eget risus egestas, lacinia velit sed, maximus quam. Aliquam dapibus et velit quis varius. Nullam tempus eget felis in sagittis. Fusce cursus neque non quam accumsan, eu pharetra purus porta. Nullam venenatis a turpis condimentum volutpat. Nam mollis feugiat mauris sed convallis. Suspendisse ultricies, magna id molestie tempus, lorem eros pretium nibh, sed luctus lectus nulla vitae augue. Etiam efficitur metus nulla, nec volutpat erat lobortis porta.

                    In mollis diam et nunc maximus, eu malesuada nibh imperdiet. Vivamus quam ligula, scelerisque pulvinar consectetur quis, maximus id risus. Fusce consectetur risus et risus blandit viverra. Nullam convallis mattis ornare. Sed tristique pulvinar nisi, id dapibus nisi auctor feugiat. Duis vitae accumsan tortor. Maecenas bibendum nec justo ac pulvinar. Proin fermentum dui velit, et consequat urna convallis a. Etiam bibendum tristique ipsum, quis condimentum libero ultricies in. Nam quis nulla nec mi feugiat venenatis sed nec urna. Aenean urna justo, eleifend sit amet gravida id, pharetra a nulla. Maecenas viverra orci ex, et blandit nibh tempus a. Donec at leo leo.

                    Etiam vel congue tellus. Pellentesque vitae lectus id erat luctus tincidunt eu vel sapien. Proin mattis egestas arcu, eu maximus justo ornare ut. Suspendisse facilisis id augue vitae ultricies. Aenean non ex libero. Quisque imperdiet dolor accumsan eleifend dignissim. Aenean sagittis ac leo non pretium.

                    Quisque consequat congue porttitor. Nulla hendrerit est massa, et mattis massa aliquet vel. Pellentesque a sem blandit neque posuere finibus quis elementum velit. Donec tincidunt mollis sollicitudin. Maecenas nec ullamcorper est. Nullam sit amet massa ac dolor dignissim consectetur sit amet sit amet ex. Sed feugiat porttitor nunc. Pellentesque vitae quam fringilla, tempor neque vel, pharetra magna. Aliquam erat lectus, mattis mollis ipsum a, luctus euismod dolor.

                    Fusce arcu dolor, placerat a ornare eu, cursus ac massa. Nam a placerat mauris, pharetra efficitur mi. Donec tincidunt nunc finibus lorem auctor placerat. Donec a odio sit amet lorem sodales tincidunt. Nulla fermentum hendrerit nisl, ut venenatis purus posuere non. Proin non quam non enim lobortis scelerisque. Etiam velit ante, pellentesque quis ex eget, gravida varius diam. Proin eget enim leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur feugiat felis non lectus elementum congue. Aliquam nibh nunc, suscipit quis iaculis id, mollis eu augue.
                    </p>
                
                </div>
                <div id="fifth-section" className={styles.paragraph}>
                <h1>{titres.titre5}</h1>
                    <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sollicitudin nulla, sit amet sollicitudin tellus accumsan ut. Suspendisse eget risus egestas, lacinia velit sed, maximus quam. Aliquam dapibus et velit quis varius. Nullam tempus eget felis in sagittis. Fusce cursus neque non quam accumsan, eu pharetra purus porta. Nullam venenatis a turpis condimentum volutpat. Nam mollis feugiat mauris sed convallis. Suspendisse ultricies, magna id molestie tempus, lorem eros pretium nibh, sed luctus lectus nulla vitae augue. Etiam efficitur metus nulla, nec volutpat erat lobortis porta.

                    In mollis diam et nunc maximus, eu malesuada nibh imperdiet. Vivamus quam ligula, scelerisque pulvinar consectetur quis, maximus id risus. Fusce consectetur risus et risus blandit viverra. Nullam convallis mattis ornare. Sed tristique pulvinar nisi, id dapibus nisi auctor feugiat. Duis vitae accumsan tortor. Maecenas bibendum nec justo ac pulvinar. Proin fermentum dui velit, et consequat urna convallis a. Etiam bibendum tristique ipsum, quis condimentum libero ultricies in. Nam quis nulla nec mi feugiat venenatis sed nec urna. Aenean urna justo, eleifend sit amet gravida id, pharetra a nulla. Maecenas viverra orci ex, et blandit nibh tempus a. Donec at leo leo.

                    Etiam vel congue tellus. Pellentesque vitae lectus id erat luctus tincidunt eu vel sapien. Proin mattis egestas arcu, eu maximus justo ornare ut. Suspendisse facilisis id augue vitae ultricies. Aenean non ex libero. Quisque imperdiet dolor accumsan eleifend dignissim. Aenean sagittis ac leo non pretium.

                    Quisque consequat congue porttitor. Nulla hendrerit est massa, et mattis massa aliquet vel. Pellentesque a sem blandit neque posuere finibus quis elementum velit. Donec tincidunt mollis sollicitudin. Maecenas nec ullamcorper est. Nullam sit amet massa ac dolor dignissim consectetur sit amet sit amet ex. Sed feugiat porttitor nunc. Pellentesque vitae quam fringilla, tempor neque vel, pharetra magna. Aliquam erat lectus, mattis mollis ipsum a, luctus euismod dolor.

                    Fusce arcu dolor, placerat a ornare eu, cursus ac massa. Nam a placerat mauris, pharetra efficitur mi. Donec tincidunt nunc finibus lorem auctor placerat. Donec a odio sit amet lorem sodales tincidunt. Nulla fermentum hendrerit nisl, ut venenatis purus posuere non. Proin non quam non enim lobortis scelerisque. Etiam velit ante, pellentesque quis ex eget, gravida varius diam. Proin eget enim leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur feugiat felis non lectus elementum congue. Aliquam nibh nunc, suscipit quis iaculis id, mollis eu augue.
                    </p>
                
                </div>

            </div>
        </div>
    );
};

export default cgu;
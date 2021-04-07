<template>
     <section class="article">
        <div class="box">
          <img class="article-pic" :src="require('@/assets/test.jpeg')">
          <div class="article-context">
            <p class="title font14">这时标题</p>
            <div class="date">
              <img :src="require('@/assets/calendar.png')">
              <span>2020-12-22</span>
            </div>
            <p class="desc">
              这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述
            </p>

            <button class="btn">点击详情</button>
          </div>

        </div>
        <div class="box">
          <img class="article-pic" :src="require('@/assets/test.jpeg')">
          <div class="article-context">
            <p class="title font14">这时标题</p>
            <div class="date">
              <img :src="require('@/assets/calendar.png')">
              <span>2020-12-22</span>
            </div>
            <p class="desc">
              这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述这时描述
            </p>

            <button class="btn">点击详情</button>
          </div>

        </div>
      </section>
</template>


<style lang="scss" scoped>
 .article {
      background: #fff;
      padding: 0.4rem 0.18rem;
      .box {
        border: 1px solid #ddd;
        margin-bottom: 0.4rem;
        img.article-pic {
          display: block;
          width: 100%;
          height: 3.15rem;
          object-fit: cover;
          margin-bottom: 0.2rem;
        }
        .article-context {
          padding: 0 0.16rem;
          padding-bottom: 0.2rem;

          .title {
            text-transform: uppercase;
            color: #464646;
            margin-bottom: 0.12rem;
          }
          .date {
            display: flex;
            align-items: center;
            img {
              width: 0.15rem;
              display: block;
              object-fit: contain;
              margin-right: 0.1rem;
            }
            span {
              font-size: 0.12rem;
              color: #999;
            }
          }
          .desc {
            margin-top: 0.12rem;
            font-size: 0.12rem;
            color: #999;
          }
          .btn {
            margin: 0.2rem 0;
            background: #222;
            font-size: 0.12rem;
            text-align: center;
            letter-spacing: 0.07rem;
            padding: 0.05rem 0.1rem;
            color: #fff;
          }
        }
      }
    }
</style>
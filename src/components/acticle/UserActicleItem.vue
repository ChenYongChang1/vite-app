<template>
  <div class="user-acticle">
    <div
      v-if="userRow.author_user_info.user_name"
      class="user-info jj-flex jj-flex-space jj-align-center jj-hover-bg"
    >
      <div class="user-count jj-flex">
        <div class="user-cover">
          <img
            class="jj-img jj-img-cover"
            src="https://lc-gold-cdn.xitu.io/bac28828a49181c34110.png?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1"
            alt=""
          />
        </div>
        <div class="user-title">
          <div class="title font-14">
            前端
          </div>
          <div class="count font-13">
            485024 关注 · 49723 文章
          </div>
        </div>
      </div>
      <div class="attend-btn jj-ponter jj-btn-attend jj-text-center font-12">
        关注
      </div>
    </div>
    <div class="user-acticle jj-pointer jj-hover-bg">
      <div class="acticle-tag font-12">
        专栏 · 姜小抖 ·
        {{ stempDiff(parseInt(userRow.article_info.ctime) * 1000) }} ·
        {{ userRow.tags[0] && userRow.tags[0].tag_name }}
      </div>
      <div class="title-acticle">
        {{ userRow.article_info.title }}
      </div>
      <div class="desc-acticle font-12">
        {{ userRow.article_info.brief_content }}
      </div>
      <div class="font-12">
        <span>{{ userRow.article_info.digg_count }}</span> -
        <span>{{ userRow.article_info.comment_count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { time } from "/@/assets/js/util";
export default {
  name: "UserActicleItem",
  props: {
    userRow: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    return { stempDiff: time.stempDiff };
  },
};
</script>

<style lang="scss" scoped>
.user-acticle {
  width: 100%;
  .user-info {
    width: 100%;
    height: 95px;
    padding: 25px;
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
    .user-count {
      .user-cover {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      .user-title {
        width: 300px;
        margin-left: 18px;
        .title {
          width: 100%;
          margin-bottom: 6px;
        }
      }
    }
    .attend-btn {
      width: 74px;
      height: 30px;
      line-height: 30px;
      color: #6cbd45;
      border: solid 1px #6cbd45;
    }
  }
  .user-acticle {
    width: 100%;
    height: 147px;
    padding: 25px;
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
    .acticle-tag {
      height: 17px;
      line-height: 17px;
    }
    .title-acticle {
      width: 100%;
      margin: 6px 0 12px 0;
    }
    .desc-acticle {
      height: 18px;
      line-height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>

<template>
<div class="logistics">
  <p>Logistics warehouse management system</p>
  <h1>
    <img src="https://img.icons8.com/wired/64/000000/fork-lift.png" s />
    物流倉庫管理システム
  </h1>
  <h2>
    <img src="https://img.icons8.com/windows/32/000000/container-truck.png" />
    コンテナ数/作業要員/フォークリフト台数管理
  </h2>

  <div class="container">
    <section class="section">
      <div class="counter__lay">
        <h3>入荷日：{{ new Date().getMonth() + 1 }} / {{ new Date().getDate() + 7 }}</h3>
        <div class="counter__org">
          <div class="counter__mol">
            <table>
              <th>項目</th>
              <th>数値</th>
              <tr>
                <td>コンテナ数</td>
                <td>{{ mCount }}</td>
              </tr>
              <tr>
                <td>稼働工数</td>
                <td>{{ double }}</td>
              </tr>
              <tr>
                <td>必要人数</td>
                <td>{{ calcA }}</td>
              </tr>
            </table>
          </div>

          <div class="counter__mol">
            <!-- <span v-show="this.$store.state.count <= 0">未入力</span> -->
            <h3>予定搬入コンテナ数</h3>
            <button @click="decrement" class="count dec">削減する</button>
            <button @click="increment" class="count inc">増加する</button>
            <p class="att" :class="{ over: on }">0以上で設定してください</p>
          </div>
          <!-- <div class="counter__mol">アイテム数量: {{ mCount }}</div>
            <div class="counter__mol">人数x2: {{ double }}</div>
            <div class="counter__mol">稼働工数: {{ calcA }}</div>-->

          <div class="counter__mol spot">
            <h4>スポット(アルバイト)追加予定人数：</h4>
            <input v-model="addCount" type="number" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="counter__lay">
        <h3>作業人数と必要台数</h3>
        <div class="counter__org">
          <div class="counter__mol">
            <h4>次回入出荷作業の予定人数：</h4>
            <div class="result_num">{{ resultA }}</div>
          </div>

          <div class="counter__mol">
            <div class="row">
              <div class="title">必要フォークリフト台数：</div>
              <!-- TODO: Computed -->
              <div class="result_num" v-if="resultA <= 5">1台</div>
              <div class="result_num" v-else>{{ Math.floor(resultA / 5) }}台</div>
            </div>
          </div>

          <div class="counter__mol">
            <div class="title">乗務員一覧：</div>
            <select v-model="selected">
              <option disabled value="">選択して下さい</option>
              <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="view__lay">
        <div class="view__org">
          <div class="view__mol">
            <h3>発注予定結果</h3>
            <ul>
              <li>予定コンテナ数：{{ mCount }}</li>
              <li><b>発注人数</b><br>
                固定メンバー：{{ Math.floor(resultA / 100 *  70)}}<br>
                臨時メンバー：{{ Math.floor(resultA / 100 *  30)}}
              </li>
              <li>主担当乗務員：{{selected }}</li>
            </ul>
            <label id="ok">
              <!-- TODO: 承認までdisable設定 -->
              <input type="checkbox" name="ok">承認
            </label>
            <br>
            <button type="submit" disabled="disabled">データ送信</button>
          </div>
        </div>
      </div>
    </section>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      addCount: 0,
      on: false,
      selected: '',
      options: [{
          id: 1,
          name: '山本航一郎'
        },
        {
          id: 2,
          name: '戸田吉敷'
        },
        {
          id: 3,
          name: '磐田英雄'
        }, {
          id: 4,
          name: '武蔵悟'
        }
      ]
    }
  },
  computed: {
    mCount() {
      return this.$store.state.count
    },
    double() {
      return this.$store.getters.double
    },
    calcA() {
      const gettersDouble = this.$store.getters.double
      const stateCount = this.$store.state.count
      return gettersDouble * stateCount
    },
    resultA() {
      if (this.addCount < 0) {
        return '0以上で入力してください'
      }
      return parseFloat(this.addCount) + this.$store.state.count * this.$store.getters.double
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      this.on = false
    },
    decrement() {
      // this.count = this.count -= 1
      if (this.$store.state.count > 0) {
        this.$store.commit('decrement')
        this.on = false
      } else {
        // alert('0以上で設定してください')
        this.on = true
      }
      // this.$store.commit('decrement')
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/component.styl'
</style>

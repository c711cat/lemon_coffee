<template>
  <div class="cart-content-wrap">
    <table class="ui very basic table">
      <tbody>
        <tr>
          <div class="cart-title">購物車清單</div>
        </tr>
        <tr>
          <td class="products-information-td">
            <div class="products-information">
              <div class="del-icon-container">
                <i class="trash alternate outline icon"></i>
              </div>
              <div class="ui small image">
                <img
                  src="https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
                />
              </div>
              <div class="products-text">
                <div>耶家雪菲 日曬 古吉 夏奇索 魔魔拉單一莊園 G1</div>
                <div>原豆-不磨粉</div>
              </div>
            </div>
          </td>
          <td class="start-end">NT$ 450 / 半磅</td>
          <td class="start-end">
            <div class="ui small input">
              <input type="number" min="1" />
            </div>
          </td>
          <td class="start-end">NT$ 450</td>
        </tr>
        <tr>
          <td class="products-information-td">
            <div class="products-information">
              <div class="del-icon-container">
                <i class="trash alternate outline icon"></i>
              </div>
              <div class="ui small image">
                <img
                  src="https://images.unsplash.com/photo-1537887467160-cf9f4a2b29c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQ4fHxjb2ZmZWUlMjBkcmlwYmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
                />
              </div>
              <div class="products-text">
                <div>肯亞 AA FAQ 159 批次</div>
                <div>耳掛</div>
              </div>
            </div>
          </td>
          <td class="start-end">NT$ 40 / 包</td>
          <td class="start-end">
            <div class="ui small input">
              <input type="number" min="1" />
            </div>
          </td>
          <td class="start-end">
            <div>
              <del class="del-text">NT$ 1600</del>
              <p>NT$ 1000<span class="discount-content"> 多件優惠</span></p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="products-information-td">
            <div class="products-information">
              <div class="del-icon-container">
                <i class="trash alternate outline icon"></i>
              </div>
              <div class="ui small image">
                <img
                  src="https://images.unsplash.com/photo-1517881426553-5d7d3abfbabf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExNXx8Y29mZmVlJTIwZHJpcGJhZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
                />
              </div>
              <div class="products-text">
                <div>哥倫比亞 娜玲瓏 山塔那小農協會 水洗</div>
                <div>原豆-不磨粉</div>
              </div>
            </div>
          </td>
          <td class="start-end">NT$ 720 / 一磅</td>
          <td class="start-end">
            <div class="ui small input">
              <input type="number" min="1" />
            </div>
          </td>
          <td class="start-end">NT$ 1440</td>
        </tr>
        
      </tbody>
      <!-- <tfoot class="foot-container">
        <tr>
          <td class="discount-container">
            <div class="discount-tag">優惠</div>
            <div class="discount-content">滿 NT$ 1000 免運費</div>
          </td>
          <td></td>
          <td class="start-end">總計</td>
          <td class="start-end">NT$ 3490</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td class="start-end">多件優惠</td>
          <td class="start-end">-NT$ 600</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td class="start-end">滿千免運</td>
          <td class="start-end"><del>NT$ 100</del></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td class="start-end">總付款金額</td>
          <td class="start-end">NT$ 2890</td>
        </tr>
      </tfoot> -->
    </table>
    <table>
      <tbody>
        <tr>
          <div class="a">
            <div class="b">
              <div class="b-1">優惠</div>
              <div>滿 NT$ 1000 免運費</div>
            </div>
            <div class="c">
              <div class="c-1">總計</div>
              <div class="c-2">NT$ 3490</div>
            </div>
          </div>
        </tr>
        <tr>
          <div class="d">
            <div class="c-1">多件優惠</div>
            <div class="c-2">- NT$ 600</div>
          </div>
        </tr>
        <br />
        <tr>
          <div class="d">
            <div class="c-1">滿千免運</div>
            <div class="c-2"><del>NT$ 100</del></div>
          </div>
        </tr>
        <br />
        <tr>
          <div class="d">
            <div class="c-1">總付款金額</div>
            <div class="c-2">NT$ 2890</div>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.a {
  display: flex;
  justify-content: space-between;
}
.b {
  display: flex;
}
.b-1 {
  width: 80px;
  background: #db2828;
  color: #fff;
  margin-right: 10px;
}
.c {
  display: flex;
  float: right;
  text-align: right;
}
.c-1 {
  width: 100px;
}
.c-2 {
  width: 100px;
}
.d {
  display: flex;
  float: right;
  text-align: right;
}
.cart-content-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 25px;
}
.cart-title {
  text-align: start;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: bolder;
  padding-left: 5px;
  color: #603813;
}
.products-information {
  display: flex;
  padding: 0px;
}
.ui.small.input {
  width: 100px;
}
.products-information-td {
  width: 600px;
  height: 150px;
}
.discount-container {
  display: flex;
  font-size: 16px;
  align-items: center;
}
.discount-tag {
  width: 70px;
  height: 28px;
  background: #db2828;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}
.discount-content {
  color: #db2828;
}
.del-text {
  color: #888;
}
.icon {
  font-size: 23px;
  cursor: pointer;
}
.icon:hover {
  color: #db2828;
}
.del-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13%;
  margin-right: 20px;
}
.products-text {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ui.small.image {
  width: 100px;
  margin-right: 30px;
}
.ui.table .start-end {
  text-align: end;
}
</style>

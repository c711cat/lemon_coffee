# 專案介紹
 * 這是一間在台南 - 灣裡，自家烘焙咖啡豆的實體店，以銷售咖啡豆為主，另提供客製化咖啡豆磨粉及耳掛商品。
 * 依目前所學技術，嘗試將實體店銷售的商品，以網路平台販售的概念來呈現。

## 主要用途
 讓業者及消費者可在網路上進行銷售及購買，為彼此增加便利性。

## 專案連結
https://c711cat.github.io/lemon_coffee/

## 技術資訊
 * 使用 Vue.js 3 框架
 * 利用 Vue Cli 建置環境
 * 引入 Vue Router 管理路由
 * 套用 Vue Axios 串接 API
 * 選用 PrimeVue 編排 UI 及相關功能
 * 以 Cookie 存取及移除管理權限
 * 使用 Vuelidate 2 製作表單驗證功能

## 開發流程
 * 使用 Git 開新分支製作功能 
 * Code Review 過了即 merge 回主支線，並進行下一回的開發

## 網站架構
 ### 消費者 ( 前台 )
   * **首頁**
   * **註冊 / 登入 / 登出**
      * 可註冊會員、登入會員及登出
      * 非會員亦可瀏覽豆單及商品詳細資訊
   * **豆單**
      * 登入後即可購買咖啡豆 
      * 可選購同一支咖啡豆，並可依據不同需求選擇原豆、磨粉或耳掛
   * **購物車**
      * 可在購物車查看、修改品項、目前購買金額
      * 可在購物車查看折扣、免運等等資訊
      * 為收件人資料加入表單驗證功能
      * 若消費者填寫過收件人資料，則系統會自動代入相關資訊
   * **訂單**
      * 可以查看自己的訂單資訊，譬如訂單狀態、付款狀態、物流狀態

 ### 業者 ( 後台 )
   * **登入**
      * 需登入後才有「業者」權限可進到管理豆單頁面進行檢視、操作以下功能
   * **豆單管理**
      * 可執行【新增】、【編輯】、【刪除】咖啡豆
      * 可在後台利用拖曳功能，調整顯示在首頁的咖啡豆排列順序 
   * **訂單管理**
      * 可以管理消費者訂單進度
      * 可以檢視消費者訂單
      * 可以修改【付款】、【訂單】、【物流】狀態
    
## 網站介紹

### 消費者 ( 前台 )
#### 1. 首頁 - 利用大圖加深主題印象
 
 ![image](https://user-images.githubusercontent.com/77562017/168983401-bd44ecba-2d0f-4dff-aefd-5067f031f72b.png)

 #### 2. 登入
 * 可以註冊會員或登入會員 
 * 登入後即可購買咖啡豆  ( 試用帳號 example@gmail.com ，密碼 12345678 )   

![image](https://user-images.githubusercontent.com/77562017/169188524-48389c21-1f5a-4ca1-bb2d-b7d97372c49c.png)

 #### 3. 豆單
 * 非會員亦可瀏覽豆單及商品詳細資訊

![image](https://user-images.githubusercontent.com/77562017/169189588-8de9a9c3-5190-4e55-a171-b879793e6e4c.png)


 * 可選購同一支咖啡豆，並可依據不同需求選擇原豆、磨粉或耳掛

![image](https://user-images.githubusercontent.com/77562017/169189642-2e6d206e-5955-4e14-b08c-2c82c1fe0fdf.png)

#### 4. 購物車
 * 可在右側購物車查看、修改品項、目前購買金額
 * 可在購物車查看折扣、免運等等資訊

![image](https://user-images.githubusercontent.com/77562017/169189934-e374c353-1014-43dd-8804-62b52da8bf41.png)

 * 收件人資料加入表單驗證功能

![image](https://user-images.githubusercontent.com/77562017/169228335-aa04dd44-9d86-4be1-85b2-6ddc94f364a0.png)


 * 若消費者填寫過收件人資料，則系統會自動代入相關資訊
 
![image](https://user-images.githubusercontent.com/77562017/169191113-cc2b01f3-e350-4aae-a9df-9e80104d3bed.png)

#### 5. 訂單 - 可以查看自己的訂單資訊，譬如訂單狀態、付款狀態、物流狀態

![image](https://user-images.githubusercontent.com/77562017/169226797-c85a6b4c-a13c-4025-8642-b92a4da30795.png)


### 業者 ( 後台 )
#### 1. 豆單管理
 * 可執行【新增】、【編輯】、【刪除】咖啡豆
 * 可在後台利用拖曳功能，調整顯示在首頁的咖啡豆排列順序
 
 ![image](https://user-images.githubusercontent.com/77562017/169192248-99432e67-1625-4ed0-8643-434fcf023f5b.png)

#### 2. 訂單管理
 * 可以管理消費者訂單進度
 * 可以檢視消費者訂單
 * 可以修改【付款】、【訂單】、【物流】狀態
 
 ![image](https://user-images.githubusercontent.com/77562017/169226181-bd1ae844-9ff7-4af7-b247-bb47e351123c.png)


## 圖片來源 & 使用資源
 * [API 文件](https://kakas.github.io/lemon_coffee_documents/#introduction)
 * 圖片來源 : [Unsplash](https://unsplash.com/)
 * 參考網站 : [步昂網站](https://www.buoncaffe.com.tw/pages/product-list) - 設計豆單、商品頁面及相關功能

## 安裝及執行專案
* **Project setup**
```
npm install
```

* **Compiles and hot-reloads for development**
```
npm run serve
```

* **Compiles and minifies for production**
```
npm run build
```

* **Run your unit tests**
```
npm run test:unit
```

* **Lints and fixes files**
```
npm run lint
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

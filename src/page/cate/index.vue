<template>
  <div class="cate">
      <Header></Header>
      <div class="cate_wrap">
          <div class="cate_main">
              <div class="cateleft">
                  <ul>
                      <li v-for="item,index in leftdata" :class="{active:index==nowIndex}"><span>{{item.category_name}}</span></li>
                  </ul>
              </div>
              <div class="cateright" ref="right" @scroll="scroll">
                  <!-- 新品 -->
                  <div class="titleimg"><img :src="leftdata[0].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[0].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[2].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[2].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[2].body.items[5].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[0].category_list[3].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[4].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[4].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[4].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[4].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[4].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[4].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[4].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[4].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[4].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[4].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[4].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[4].body.items[5].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[0].category_list[5].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[6].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[6].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[6].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[6].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[0].category_list[6].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[0].category_list[6].body.items[2].product_name}}</div>
                          </div>
                      </div>
                  </div>

                    <!-- 手机 -->
                  <div class="titleimg"><img :src="leftdata[1].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[1].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[2].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[2].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[2].body.items[5].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[1].category_list[3].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[4].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[4].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[4].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[4].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[4].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[4].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[4].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[4].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[4].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[4].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[4].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[4].body.items[5].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[1].category_list[5].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[6].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[6].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[6].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[6].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[1].category_list[6].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[1].category_list[6].body.items[2].product_name}}</div>
                          </div>
                      </div>
                  </div>

                    <!-- 电视 -->
                  <div class="titleimg"><img :src="leftdata[2].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[2].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[2].body.items[4].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[2].category_list[4].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[5].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[5].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[5].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[5].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[5].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[5].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[5].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[5].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[5].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[5].body.items[4].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[2].category_list[6].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[7].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[7].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[7].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[7].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[7].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[7].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[7].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[7].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[7].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[7].body.items[4].product_name}}</div>
                          </div>
                      </div>
                  </div>

                    <!-- 电脑 -->
                  <div class="titleimg"><img :src="leftdata[3].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[3].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[3].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[3].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[3].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[3].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[3].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[3].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[3].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[3].category_list[2].body.items[3].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[3].category_list[4].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[3].category_list[5].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[3].category_list[5].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[3].category_list[5].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[3].category_list[5].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[3].category_list[5].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[3].category_list[5].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[3].category_list[5].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[3].category_list[5].body.items[3].product_name}}</div>
                          </div>
                      </div>
                  </div>        

                    <!-- 家电 -->
                  <div class="titleimg"><img :src="leftdata[4].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[4].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[4].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[4].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[4].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[4].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[4].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[4].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[4].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[4].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[4].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[4].category_list[2].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[4].category_list[2].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[4].category_list[2].body.items[5].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[4].category_list[2].body.items[6].img_url" alt=""></div>
                              <div class="name">{{leftdata[4].category_list[2].body.items[6].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[4].category_list[2].body.items[7].img_url" alt=""></div>
                              <div class="name">{{leftdata[4].category_list[2].body.items[7].product_name}}</div>
                          </div>
                      </div>
                  </div>


                    <!-- 路由 -->
                  <div class="titleimg"><img :src="leftdata[5].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[5].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[5].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[5].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[5].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[5].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[5].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[5].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[5].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[5].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[5].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[5].category_list[2].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[5].category_list[2].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[5].category_list[2].body.items[5].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[5].category_list[2].body.items[6].img_url" alt=""></div>
                              <div class="name">{{leftdata[5].category_list[2].body.items[6].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[5].category_list[2].body.items[7].img_url" alt=""></div>
                              <div class="name">{{leftdata[5].category_list[2].body.items[7].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[5].category_list[2].body.items[8].img_url" alt=""></div>
                              <div class="name">{{leftdata[5].category_list[2].body.items[8].product_name}}</div>
                          </div>
                      </div>
                  </div>


                  <!-- 智能 -->
                  <div class="titleimg"><img :src="leftdata[6].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[6].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[2].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[2].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[2].body.items[5].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[6].category_list[4].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[5].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[5].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[5].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[5].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[5].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[5].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[2].category_list[5].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[2].category_list[5].body.items[3].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[6].category_list[6].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[7].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[7].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[7].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[7].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[7].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[7].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[7].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[7].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[7].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[7].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[6].category_list[7].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[6].category_list[7].body.items[5].product_name}}</div>
                          </div>
                      </div>
                  </div>


                  <!-- 儿童 -->
                  <div class="titleimg"><img :src="leftdata[7].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[7].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[5].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[6].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[6].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[7].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[7].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[8].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[8].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[9].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[9].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[10].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[10].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[11].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[11].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[12].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[12].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[13].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[13].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[14].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[14].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[15].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[15].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[16].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[16].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[17].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[17].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[7].category_list[2].body.items[18].img_url" alt=""></div>
                              <div class="name">{{leftdata[7].category_list[2].body.items[18].product_name}}</div>
                          </div>
                      </div>
                  </div>


                  <!-- 电源 -->
                  <div class="titleimg"><img :src="leftdata[8].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[8].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[8].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[8].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[8].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[8].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[8].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[8].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[8].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[8].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[8].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[8].category_list[2].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[8].category_list[2].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[8].category_list[2].body.items[5].product_name}}</div>
                          </div>
                      </div>
                  </div>


                    <!-- 耳机 -->
                  <div class="titleimg"><img :src="leftdata[9].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[9].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[9].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[9].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[9].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[9].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[9].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[9].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[9].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[9].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[9].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[9].category_list[2].body.items[4].product_name}}</div>
                          </div>
                      </div>
                  </div>



                  <!-- 音像 -->
                  <div class="titleimg"><img :src="leftdata[10].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[10].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[10].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[10].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[10].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[10].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[10].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[10].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[10].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[10].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[10].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[10].category_list[2].body.items[4].product_name}}</div>
                          </div>
                      </div>
                  </div>


                  <!-- 礼品 -->
                  <div class="titleimg"><img :src="leftdata[11].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[11].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[11].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[11].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[11].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[11].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[11].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[11].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[11].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[11].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[11].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[11].category_list[2].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[11].category_list[2].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[11].category_list[2].body.items[5].product_name}}</div>
                          </div>
                      </div>
                  </div>


                  <!-- 生活 -->
                  <div class="titleimg"><img :src="leftdata[12].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[12].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[5].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[6].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[6].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[7].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[7].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[8].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[8].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[9].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[9].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[2].body.items[10].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[2].body.items[10].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[12].category_list[4].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[5].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[5].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[5].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[5].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[5].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[5].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[5].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[5].body.items[3].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[5].body.items[4].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[5].body.items[4].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[5].body.items[5].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[5].body.items[5].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[5].body.items[6].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[5].body.items[6].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[5].body.items[7].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[5].body.items[7].product_name}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="title"><span>{{leftdata[12].category_list[6].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[7].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[7].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[7].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[7].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[12].category_list[7].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[12].category_list[7].body.items[2].product_name}}</div>
                          </div>
                      </div>
                  </div>


                  <!-- 服务 -->
                  <div class="titleimg"><img :src="leftdata[13].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[13].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[13].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[13].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[13].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[13].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[13].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[13].category_list[2].body.items[2].product_name}}</div>
                          </div>
                      </div>
                  </div>



                  <!-- 米粉卡 -->
                  <div class="titleimg"><img :src="leftdata[14].category_list[0].body.items[0].img_url" alt=""></div>
                  <div class="title"><span>{{leftdata[14].category_list[1].body.category_name}}</span></div>
                  <div class="list_wrap">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[14].category_list[2].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[14].category_list[2].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[14].category_list[2].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[14].category_list[2].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[14].category_list[2].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[14].category_list[2].body.items[2].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[14].category_list[2].body.items[3].img_url" alt=""></div>
                              <div class="name">{{leftdata[14].category_list[2].body.items[3].product_name}}</div>
                          </div>
                      </div>
                  </div>  


                  <!-- 零售店 -->
                  <div class="title"><span>{{leftdata[15].category_list[0].body.category_name}}</span></div>
                  <div class="list_wrap lastone">
                      <div class="lists">
                          <div class="items">
                              <div class="img"><img :src="leftdata[15].category_list[1].body.items[0].img_url" alt=""></div>
                              <div class="name">{{leftdata[15].category_list[1].body.items[0].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[15].category_list[1].body.items[1].img_url" alt=""></div>
                              <div class="name">{{leftdata[15].category_list[1].body.items[1].product_name}}</div>
                          </div>
                          <div class="items">
                              <div class="img"><img :src="leftdata[15].category_list[1].body.items[2].img_url" alt=""></div>
                              <div class="name">{{leftdata[15].category_list[1].body.items[2].product_name}}</div>
                          </div>
                      </div>
                  </div>  
              </div>
          </div>
      </div>
      <Footer></Footer>
  </div>
  
</template>

<script>
import Footer from '../../components/footer'
import Header from '../../components/header'
import axios from 'axios'
export default {
    data(){
        return{
            leftdata:[],
            nowIndex:0,
            top:0
        }
    },
    methods:{
        scroll(event){
            // console.log(event.target.scrollTop)
            var sTop=event.target.scrollTop
            if(sTop>0){
                this.nowIndex=0;
            }
            if(sTop>1060){
                this.nowIndex=1;
            }
            if(sTop>2120){
                this.nowIndex=2;
            }
            if(sTop>3320){
                this.nowIndex=3;
            }
            if(sTop>4150){
                this.nowIndex=4;
            }
            if(sTop>4760){
                this.nowIndex=5;
            }
            if(sTop>5360){
                this.nowIndex=6;
            }
            if(sTop>6570){
                this.nowIndex=7;
            }
            if(sTop>7710){
                this.nowIndex=8;
            }
            if(sTop>8180){
                this.nowIndex=9;
            }
            if(sTop>8660){
                this.nowIndex=10;
            }
            if(sTop>9130){
                this.nowIndex=11;
            }
            if(sTop>9600){
                this.nowIndex=12;
            }
            if(sTop>11070){
                this.nowIndex=13;
            }
            if(sTop>11410){
                this.nowIndex=14;
            }
            if(sTop>11900){
                this.nowIndex=15;
            }
        },
    },
    mounted(){
        axios({
            url:'https://www.easy-mock.com/mock/5ad960047bd0967f61786db9/example_copy/cate',
            method:'get',
        }).then(res=>{
            this.leftdata=res.data.data
        })
    },
    components:{Header,Footer}
}
</script>

<style>
.cate_wrap .cate_main .cateright .lastone{
    min-height: -webkit-calc(100vh - .8rem);
    min-height: calc(98vh - 1.2rem);
}
.name{
    margin-top: .28rem;
    white-space: nowrap;
    font-size: .23rem;
    color: rgba(0,0,0,.54);
    overflow: hidden;
    text-overflow: ellipsis;
}
.img>img{
     height:100%;width:auto;
}
.img{
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
    background: #fff;
    overflow: hidden;
}
.list_wrap{
    background: #fff;
    margin: -.06rem 0 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.lists{
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 100%;
    overflow: hidden;
}
.items{
    float: left;
    width: 33.333333333333336%;
    text-align: center;
    margin-top: .2rem;
    margin-bottom: .3rem;
    overflow: hidden;
}
.title{
    background: #fff;
    font-size: .28rem;
    text-align: center;
    font-weight: 400;
    margin-top: .2rem;
    height: 1.28rem;
    line-height: 1.28rem;
    overflow: hidden;
}
.title>span{
    position: relative;
}
.title>span::before,.title>span::after{
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 6.4px;
    width: .4rem;
    border-top: 1px solid #e0e0e0;
    transform: translate3d(-150%,-50%,0);
    -webkit-transform: translate3d(-150%,-50%,0);
}
.title>span::after{
    left: auto;
    right: 0;
    transform: translate3d(150%,-50%,0);
    -webkit-transform: translate3d(150%,-50%,0);
}
.titleimg{
    width: 100%;
    height: 1.7rem;
}
.titleimg>img{
    width: 100%;
    height: 100%;
}
html,body,#app,.cate{
    width: 100%;
    height: 100%;
}
.cate_wrap{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 7.2rem;
    margin: 0 auto;
}
.cate_main{
    position: absolute;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    will-change: transform;
    background: #fff;
    color: #3c3c3c;
    padding-top: 50px;
    padding-bottom: 52px;
    box-sizing: border-box;
}
.cateleft{
    position: fixed;
    top: 49px;
    bottom: 52px;
    left: 0;
    width: 1.52rem;
    border-right: 1px solid #efefef;
    overflow: hidden;
}
.cateleft>ul{
    z-index: 90;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -.3rem;
    padding: .2rem .3rem .2rem 0;
    background: #fefefe;
    overflow-y: auto;
}
.cateleft>ul>li{
    font-size: .34rem;
    height: .9rem;
    line-height: .9rem;
    overflow: hidden;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    transition: -webkit-transform .1s linear;
    transition: transform .1s linear;
    transition: transform .1s linear,-webkit-transform .1s linear;
    transform-origin: center center;
    transform: scale(.76);
    -webkit-transition: -webkit-transform .1s linear;
    -webkit-transform-origin: center center;
    -webkit-transform: scale(.76);
}
.cateleft>ul>.active{
    color: #fb7d34;
    transform: scale(1);
    -webkit-transform: scale(1);
}
.cateright{
    position: absolute;
    left: 1.52rem;
    right: 0;
    top: 49px;
    bottom: 52px;
    padding: 2px .32rem;
    overflow: auto;
}
</style>


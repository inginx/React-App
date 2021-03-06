import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router'

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }

        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/serach/jingdian"><li className="float-left jingdian">景点</li></Link>
                            <Link to="/serach/ktv"><li className="float-left ktv">KTV</li></Link>
                            <Link to="/serach/gouwu"><li className="float-left gouwu">购物</li></Link>
                            <Link to="/serach/shenghuofuwu"><li className="float-left shenghuofuwu">生活服务</li></Link>
                            <Link to="/serach/jianshen"><li className="float-left jianshenyundong">健身运动</li></Link>
                            <Link to="/serach/meifa"><li className="float-left meifa">美发</li></Link>
                            <Link to="/serach/qinzi"><li className="float-left qinzi">亲子</li></Link>
                            <Link to="/serach/xiaochikuaican"><li className="float-left xiaochikuaican">小吃快餐</li></Link>
                            <Link to="/serach/zizhucan"><li className="float-left zizhucan">自助餐</li></Link>
                            <Link to="/serach/jiuba"><li className="float-left jiuba">酒吧</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/serach/meishi"><li className="float-left meishi">美食</li></Link>
                            <Link to="/serach/dianying"><li className="float-left dianying">电影</li></Link>
                            <Link to="/serach/jiudian"><li className="float-left jiudian">酒店</li></Link>
                            <Link to="/serach/xiuxianyule"><li className="float-left xuixianyule">休闲娱乐</li></Link>
                            <Link to="/serach/waimai"><li className="float-left waimai">外卖</li></Link>
                            <Link to="/serach/huoguo"><li className="float-left huoguo">火锅</li></Link>
                            <Link to="/serach/liren"><li className="float-left liren">丽人</li></Link>
                            <Link to="/serach/dujialvxing"><li className="float-left dujiachuxing">度假出行</li></Link>
                            <Link to="/serach/zuliaoanmo"><li className="float-left zuliaoanmo">足疗按摩</li></Link>
                            <Link to="/serach/zhoubianyou"><li className="float-left zhoubianyou">周边游</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/serach/ribencai"><li className="float-left ribencai">日本菜</li></Link>
                            <Link to="/serach/SPA"><li className="float-left SPA">SPA</li></Link>
                            <Link to="/serach/jiehun"><li className="float-left jiehun">结婚</li></Link>
                            <Link to="/serach/xuexipeixun"><li className="float-left xuexipeixun">学习培训</li></Link>
                            <Link to="/serach/xican"><li className="float-left xican">西餐</li></Link>
                            <Link to="/serach/huochejipiao"><li className="float-left huochejipiao">火车机票</li></Link>
                            <Link to="/serach/shaokao"><li className="float-left shaokao">烧烤</li></Link>
                            <Link to="/serach/jiazhuang"><li className="float-left jiazhuang">家装</li></Link>
                            <Link to="/serach/congwu"><li className="float-left chongwu">宠物</li></Link>
                            <Link to="/serach/quanbufenlei"><li className="float-left quanbufenlei">全部分类</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category
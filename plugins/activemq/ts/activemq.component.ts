namespace ActiveMQ {

  export const activeMQComponent: angular.IComponentOptions = {
    template: `
      <div class="tree-nav-layout">
        <div class="sidebar-pf sidebar-pf-left" resizable r-directions="['right']">
          <activemq-tree-header></activemq-tree-header>
          <activemq-tree></activemq-tree>
        </div>
        <div class="tree-nav-main">
          <div>
            <jmx-header></jmx-header>
          </div>
          <activemq-navigation></activemq-navigation>
          <div class="contents" ng-view></div>
        </div>
      </div>
    `
  };

}

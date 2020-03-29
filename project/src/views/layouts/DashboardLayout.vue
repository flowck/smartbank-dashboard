<template>
  <div class="sb-dashboard-layout">
    <aside class="sb-navbar">
      <div class="sb-navbar__logo">
        <h1>S.</h1>
      </div>

      <nav class="sb-navbar__nav">
        <ul>
          <li>
            <router-link to="#">
              <i class="far fa-chart-bar"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="fas fa-dollar-sign"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="far fa-bell"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="far fa-comment-dots"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="fas fa-map-marker-alt"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="fas fa-sliders-h"></i>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="sb-navbar__logout">
        <i class="fas fa-sign-out-alt"></i>
      </div>
    </aside>
    <section class="sb-views">
      <sb-card>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facilis,
        accusamus vel, soluta molestias blanditiis explicabo eos ullam
        temporibus quo excepturi quasi dicta ipsam? Sit quod sunt aliquid
        recusandae repellat?

        <sb-button>Hello</sb-button>
      </sb-card>
      <br />
      <sb-input label="E-mail"></sb-input>
      <br />
      <sb-search></sb-search>
      <br />
      <sb-message
        userName="Firmino"
        userAvatar="http://changani.me/site/me.png"
        message="Hello world, I am testing the message component Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facilis,
        accusamus vel, soluta molestias blanditiis explicabo eos ullam
        temporibus quo excepturi quasi dicta ipsam? Sit quod sunt aliquid
        recusandae repellat?"
      ></sb-message>
      <br />
      <sb-message
        :isSender="true"
        userName="Obama Barack"
        userAvatar="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
        message="Hello world, I am testing the message component Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facilis,
        accusamus vel, soluta molestias blanditiis explicabo eos ullam
        temporibus quo excepturi quasi dicta ipsam? Sit quod sunt aliquid
        recusandae repellat?"
      ></sb-message>
      <br />
      <sb-datagrid :columns="columns" :data="data"></sb-datagrid>
      <br />
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import { Column } from "../../interfaces/index";
import { Component, Vue } from "vue-property-decorator";
// @ts-ignore
import { Server } from "miragejs";

// Mock data
// @ts-nocheck
new Server({
  routes() {
    this.namespace = "/api";

    this.get("/messages", () => {
      return [
        {
          id: Math.random(),
          message: "Hi everyone, I am testing Miragejs",
          userName: "Firmino Changani",
          userAvatar: "http://changani.me/site/me.png",
          createdAt: new Date()
        }
      ];
    });
  }
});

@Component
export default class DashboardLayout extends Vue {
  private columns: Array<Column> = [
    {
      label: "Place",
      name: "place"
    },
    {
      label: "Purchases",
      name: "purchases"
    },
    {
      label: "Date",
      name: "createdAt"
    },
    {
      label: "Cashback",
      name: "cashback"
    },
    {
      label: "Expense",
      name: "expense"
    }
  ];

  private data: any = [
    {
      id: 1,
      place: "Strand Book Store",
      purchases: "Debit card first",
      createdAt: "21 Jun 2018",
      cashback: 5.0,
      expense: 58.0,
      currency: "USD"
    },
    {
      id: 2,
      place: "Strand Book Store",
      purchases: "Debit card first",
      createdAt: "21 Jun 2018",
      cashback: 5.0,
      expense: 58.0,
      currency: "USD"
    },
    {
      id: 3,
      place: "Strand Book Store",
      purchases: "Debit card first",
      createdAt: "21 Jun 2018",
      cashback: 5.0,
      expense: 58.0,
      currency: "USD"
    },
    {
      id: 4,
      place: "Strand Book Store",
      purchases: "Debit card first",
      createdAt: "21 Jun 2018",
      cashback: 5.0,
      expense: 58.0,
      currency: "USD"
    }
  ];
}
</script>

<style lang="scss">
$navbar-width: 80px;
$views-width: calc(100% - #{$navbar-width});

.sb-dashboard-layout {
  height: 100%;
}

.sb-navbar {
  height: 100%;
  display: flex;
  position: fixed;
  width: $navbar-width;
  flex-direction: column;
  justify-content: space-between;
  background-color: $sb-color-white;

  & div {
    display: flex;
    justify-content: center;
  }

  .sb-navbar__logo {
    padding-top: 30px;
  }

  .sb-navbar__logout {
    padding-bottom: 30px;
  }

  .sb-navbar__nav {
    width: 100%;
    display: flex;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        justify-content: center;
        list-style: none;
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }

        a {
          color: $sb-text-color--middle;

          &:hover {
            color: $sb-color-blue;
          }
        }
      }
    }
  }
}

.sb-views {
  float: right;
  height: 100%;
  padding: 30px;
  width: $views-width;
}
</style>

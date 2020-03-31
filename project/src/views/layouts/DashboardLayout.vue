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

      <div class="sb-navbar__logout" @click="logout">
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

  /**
   * On user logout
   */
  private logout() {
    this.$router.push({ name: "Login" });
  }
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
    cursor: pointer;
    padding-bottom: 30px;
    transition: color 0.5s;

    &:hover {
      color: $sb-color-blue;
    }
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

@media screen and (max-width: 450px) {
  .sb-navbar {
    bottom: 0;
    width: 100%;
    height: 60px;
    z-index: 900;
    display: fixed;
    flex-direction: row;
    position: asbolute;
    box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);

    .sb-navbar__logo {
      display: none;
    }

    .sb-navbar__nav {
      width: 85%;
      ul {
        justify-content: space-between;
        flex-direction: initial;
        padding: 0 10px;

        li {
          height: 100%;
          display: flex;
          align-items: center;

          a {
            font-size: 18px;
          }
        }
      }
    }

    .sb-navbar__logout {
      width: 15%;
      padding: 0;
      height: 100%;
      display: flex;
      font-size: 18px;
      align-items: center;
    }
  }

  .sb-views {
    width: 100%;
    padding: 10px;
  }
}
</style>

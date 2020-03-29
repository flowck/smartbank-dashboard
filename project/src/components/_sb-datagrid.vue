<template>
  <div class="sb-datagrid">
    <sb-card>
      <table>
        <thead class="sb-datagrid__head">
          <th
            class="sb-datagrid__head__col"
            v-for="column in columns"
            :key="column.name"
          >
            {{ column.label }}
          </th>
        </thead>

        <tbody>
          <tr class="sb-datagrid__row" v-for="item in data" :key="item.id">
            <td
              class="sb-datagrid__row__col"
              v-for="column in columns"
              :key="column.name"
            >
              {{ item[column.name] }}
            </td>
          </tr>
        </tbody>
      </table>
    </sb-card>
  </div>
</template>

<script lang="ts">
import { Column } from "../interfaces/index";
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class SBDatagrid extends Vue {
  @Prop({ required: true }) columns!: Array<Column>;
  @Prop({ required: true }) data!: Array<[]>;
}
</script>

<style lang="scss">
.sb-datagrid {
  $col-margin: 10px;
  $col-padding: 20px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  .sb-datagrid__head {
    // border-radius: 10px; Not working
    padding: $col-padding 0;
    background-color: #f9fafc;
    justify-content: space-between;

    .sb-datagrid__head__col {
      font-size: 14px;
      text-align: left;
      font-family: $sb-font--bold;
      color: $sb-text-color--middle;
      padding: $col-padding 0 $col-padding 10px;
    }
  }

  .sb-datagrid__row {
    padding: $col-padding 0;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .sb-datagrid__row__col {
      font-size: 14px;
      padding: 20px 0 20px 10px;
    }
  }
}
</style>

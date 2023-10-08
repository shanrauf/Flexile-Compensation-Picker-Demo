<script setup lang="ts">
import FlexileButton from "@/components/FlexileButton.vue";
import { contractor_data } from "../utils/data";
</script>

<template>
  <div class="table-container">
    <div class="table">
      <div class="row header">
        <div class="cell">Full Name</div>
        <div class="cell">Role</div>
        <div class="cell">Location</div>
        <div class="cell">Joined On</div>
        <div class="cell">$/hr</div>
        <div class="cell">Hours/wk</div>
        <div class="cell">Weeks/yr</div>
        <div class="cell">Stock %</div>
        <div class="cell">Action</div>
      </div>
      <div v-for="contractor in contractor_data" :key="contractor.id" class="row table-body-row">
        <div class="cell" data-title="Full Name">
          {{contractor.full_name}}
        </div>
        <div class="cell" data-title="Role">
          {{contractor.role}}
        </div>
        <div class="cell" data-title="Location">
          {{contractor.location}}
        </div>
        <div class="cell" data-title="Joined On">
          {{contractor.joined_on}}
        </div>
        <div class="cell" data-title="Hourly Rate">
          {{contractor.hourly_rate}}
        </div>
        <div class="cell" data-title="Hours Per Week">
          {{contractor.hours_per_week}}
        </div>
        <div class="cell" data-title="Weeks Per Year">
          {{contractor.weeks_per_year}}
        </div>
        <div class="cell" data-title="Stock %">
          {{contractor.stock_options_percentage}}%
        </div>
        <div class="cell" data-title="Action">
          <FlexileButton />
        </div>
      </div>
    </div>
    <!-- {activeContractorInfo?.contractor && <Popup
      open={activeContractorInfo}
      closeOnDocumentClick
      onClose={() => setActiveContractorInfo(null)}
      modal>
        {close => (
          <CompensationEditor
          contractor={activeContractorInfo.contractor}
          close={close}
          onSubmit={updateContractorData} />
        )}
    </Popup>} -->
  </div>
</template>

<style scoped>
.table-container {
  width: 960px;
  border-radius: 10px;
  overflow: hidden
}

.table {
  width: 100%;
  display: table;
  margin: 0
}

@media screen and (max-width: 768px) {
  .table {
      display:block
  }
}

.row {
  display: table-row;
  background: #fff
}

.row.header {
  color: #fff;
  background: black
}

@media screen and (max-width: 768px) {
  .row {
      display:block
  }

  .row.header {
      padding: 0;
      height: 0
  }

  .row.header .cell {
      display: none
  }

  .row .cell:before {
      font-size: 12px;
      color: gray;
      line-height: 1.2;
      text-transform: uppercase;
      font-weight: unset!important;
      margin-bottom: 13px;
      content: attr(data-title);
      min-width: 98px;
      display: block
  }
}

.cell {
  display: table-cell
}

@media screen and (max-width: 768px) {
  .cell {
      display:block
  }
}

.row .cell {
  font-size: 15px;
  color: #666;
  line-height: 1.2;
  font-weight: unset!important;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2
}

.row.header .cell {
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  font-weight: unset!important;
  padding-top: 19px;
  padding-bottom: 19px
}

.row .cell:nth-child(1) {
  width: 150px;
}

.row .cell:nth-child(9) {
  width: 150px;
}

.table-body-row:hover {
  background-color: #ececff;
}

@media(max-width: 768px) {
  .row {
      border-bottom:1px solid #f2f2f2;
      padding-bottom: 18px;
      padding-top: 30px;
      padding-right: 15px;
      margin: 0
  }

  .row .cell {
      border: none;
      padding-left: 30px;
      padding-top: 16px;
      padding-bottom: 16px
  }

  .row .cell:nth-child(1) {
      padding-left: 30px
  }

  .row .cell {
      font-size: 18px;
      color: #555;
      line-height: 1.2;
      font-weight: unset!important
  }

  .table,.row,.cell {
      width: 100%!important
  }
}
</style>

<script lang="ts">
    import { onMount } from "svelte";
    import { initializeNavigation } from '../scripts/sidebar';

    onMount(() => {
      initializeNavigation();
    });
  </script>

  <div class="sidebar">
    <ul>
      <li><a href="#AdvancedSolarPanel"><img src="./images/bar/advslr.png" alt="Advanced Solar Panel"></a></li>
      <li><a href="#IndustrialCraft"><img src="./images/bar/ic2.png" alt="Industrial Craft"></a></li>
      <li><a href="#GraviSuite"><img src="./images/bar/GraviSuite.png" alt="GraviSuite"></a></li>
      <li><a href="#AppliedEnergistics"><img src="./images/bar/ae2.png" alt="Applied Energistics"></a></li>
      <li><a href="#CompactWindmils"><img src="./images/bar/CompactWindmils.png" alt="Compact Windmils"></a></li>
      <li><a href="#ChargePads"><img src="./images/bar/ChargePads.png" alt="Charge Pads"></a></li>
      <li><a href="#BuildCraft"><img src="./images/bar/BuildCraft.png" alt="BuildCraft"></a></li>
      <li><a href="#ComboArmors"><img src="./images/bar/ComboArmors.png" alt="Combo Armors"></a></li>
      <li><a href="#BaseResource"><img src="./images/bar/BaseResource.png" alt="Base Resource"></a></li>
    </ul>
  </div>
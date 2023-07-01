<script lang="ts">
  const calcAge = (birthDate: Date) => {
    const now = new Date();
    let yearDiff = now.getFullYear() - birthDate.getFullYear();
    if (now.getMonth() < birthDate.getMonth()) {
      yearDiff--;
    } else if (now.getMonth() === birthDate.getMonth()) {
      if (now.getDate() < birthDate.getDate()) {
        yearDiff--;
      }
    }
    return yearDiff;
  };
  $: age = calcAge(new Date('1998-10-09'));
</script>

<div class="profile">
  <div id="profile-picture">
    <img src="./profile.png" alt="profile">
  </div>
  <div class="information">
    <span id="name">
      Arthur Joppart ({age})
    </span>
    <div>
      <img src="./suitcase.svg" alt="suitcase icon">
      <span>Software Engineer</span>
    </div>
    <div>
      <img src="./email.svg" alt="email icon">
      <a type="email" href="mailto:arthur.joppart@gmail.com">
        arthur.joppart@gmail.com
      </a>
    </div>
    <div>
      <img src="./location.svg" alt="location icon">
      <span>Leuven, België</span>
    </div>
  </div>
</div>

<style>
  .profile {
    margin: 0 auto;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 20px 10px 10px;
  }
  #profile-picture {
    max-width: 85px;
    max-height: 85px;
  }
  #profile-picture img {
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
  }
  #name {
    font-size: 20px;
    font-weight: bold;
  }
  .information {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .information img {
    height: 16px;
  }
  .information > * {
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>

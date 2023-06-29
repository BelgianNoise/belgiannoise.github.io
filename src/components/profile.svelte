<script>

</script>

<div class="profile">
  <img id="profile-picture" src="./profile.png" alt="profile">
  <div class="information">
    <span id="name">
      Arthur Joppart (<span id="age">24</span>)
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
    padding: 20px 0 10px;
  }
  #profile-picture {
    border-radius: 50%;
    height: 85px;
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

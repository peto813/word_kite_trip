<template>
    <div>
        <b-form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <!--Grid row-->
                <b-row>
                    <!--Grid column-->
                    <b-col md="6">
                        <div class="md-form mb-0">
                            <b-input type="text" id="name" name="name"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </b-col>
                    <!--Grid column-->

                    <!--Grid column-->
                    <b-col md="6">
                        <b-form class="mb-0">
                            <b-input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </b-form>
                    </b-col>
                    <!--Grid column-->

                </b-row>
                <!--Grid row-->

                <!--Grid row-->
                <b-row>
                    <b-col cols="12">
                        <b-form class="mb-0">
                            <b-input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </b-form>
                    </b-col>
                </b-row>
                <!--Grid row-->

                <!--Grid row-->
                <b-row>

                    <!--Grid column-->
                    <b-col md="12">

                        <b-form>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </b-form>

                    </b-col>
                </b-row>
                <!--Grid row-->
        </b-form>
    </div>
</template>
<script>
export default {
    props:{
        form:Object
    }
}
</script>
<style scoped>

</style>

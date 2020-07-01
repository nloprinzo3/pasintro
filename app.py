from flask import Flask, render_template, request, Response
from pprint import pprint

num_inputs_displayed = [i for i in range(5)]
app = Flask(__name__)
items_for_drop = ["Part 1", "Part 2"]
branches_for_drop = ["Branch 1", "Branch 2"]
yards_for_drop = ["Yard 1", "Yard 2"]

@app.route("/")
def input_form():
    print("We're displaying input.html. Someone accessed the page.")
    return render_template("input.html", items=items_for_drop, the_range=num_inputs_displayed, branches=branches_for_drop, yards=yards_for_drop)


@app.route("/result", methods=["GET", "POST"])
def result():
    pprint(request)
    return request.form


if __name__ == "__main__":
    app.run(debug=True)